import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

const users = [
  {
    name: 'Admin User',
    email: 'Admin@wahidshop.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: true,
  },
  {
    name: 'Wahid GOAT',
    email: 'wahid@wahidshop.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: false,
  },
  {
    name: 'John Doe',
    email: 'john@wahidshop.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: false,
  },
];

export default users;
