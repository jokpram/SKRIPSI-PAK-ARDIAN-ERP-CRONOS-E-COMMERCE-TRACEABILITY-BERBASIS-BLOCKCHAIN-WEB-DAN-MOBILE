// controllers/auth/admin.controller.js
import * as AdminService from '../../services/auth/admin.service.js';

export const register = async (req, res, next) => {
  try {
    const user = await AdminService.register(req.body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const { user, token } = await AdminService.login(
      req.body.email,
      req.body.password
    );
    req.session.user = { id: user.id, role: 'admin' };
    res.json({ token });
  } catch (e) {
    next(e);
  }
};

export const me = async (req, res) => {
  res.json(req.user);
};

export const logout = async (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'Logged out' });
  });
};
