// utils/password.util.js
import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
