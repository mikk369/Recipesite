const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//token function so dont have to repeat code
const signToken = (id, username) => {
  return jwt.sign({ id, username }, process.env.SECRET_KEY, {
    expiresIn: 1 * 24 * 60 * 60 * 1000,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // check if email is valid
    const checkEmail = /\S+@\S+\.\S+/;
    if (!checkEmail.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
    // check if password is at least 8 characters
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }
    // check if user already exists
    const userExists = await User.checkUser(username, email);
    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    }
    // create new user
    const newUser = await User.createUser(username, email, password);
    //token
    const token = signToken(newUser.user_id);
    return res.status(201).json({ message: 'User created successfully', token, user: newUser });
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check if email and password exist
    if (!email || !password) {
      return next(
        res.status(400).json({
          error: 'Please provide email and password',
        })
      );
    }
    // check if user exist
    const user = await User.getUserByEmail(email);
    // if user does not exist stops here
    if (!user) {
      return next(
        res.status(401).json({
          message: 'Username or password incorrect',
        })
      );
    }
    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(
        res.status(401).json({
          message: 'Username or password incorrect',
        })
      );
    }
    // if ok, send token
    const token = signToken(user.user_id, user.username);
    // put token into cookie
    res.cookie('jwt', token, {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      // secure: true,
      httpOnly: true,
    });
    // removes password from output
    user.password = undefined;
    // set token to headers
    res.set('Authorization', `Bearer ${token}`);
    // sends response
    res.status(200).json({
      message: 'User logged in!',
      token,
      user: user,
    });
  } catch (error) {
    res.status(500).send({
      error: 'error',
    });
  }
};
