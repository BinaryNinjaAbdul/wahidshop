import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

// Protect Routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT token from cookie
  token = req.cookies.jwt;

  if (!token) {
    res.status(401);
    throw new Error(`Not Authorized, no token`);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password');
    next();
  } catch (err) {
    console.lof(err);
    res.status(401);
    throw new Error(`Not Authorized, Invalid Token`);
  }
});

// Admin Middleware
const admin = (req, res, next) => {
  if (req.user.isAdmin === true) {
    next();
  } else {
    res.status(401);
    throw new Error(`You are not authorized for this route`);
  }
};

export { protect, admin };
