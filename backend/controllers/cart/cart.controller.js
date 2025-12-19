// controllers/cart/cart.controller.js
import * as CartService from '../../services/cart/cart.service.js';

export const getMyCart = async (req, res, next) => {
  try {
    const cart = await CartService.getOrCreate(req.user.id);
    res.json(cart);
  } catch (e) {
    next(e);
  }
};
