// controllers/cart/cartItem.controller.js
import * as CartItemService from '../../services/cart/cartItem.service.js';
import * as CartService from '../../services/cart/cart.service.js';

export const addItem = async (req, res, next) => {
  try {
    const cart = await CartService.getOrCreate(req.user.id);
    const item = await CartItemService.addItem(cart.id, req.body);
    res.status(201).json(item);
  } catch (e) {
    next(e);
  }
};
