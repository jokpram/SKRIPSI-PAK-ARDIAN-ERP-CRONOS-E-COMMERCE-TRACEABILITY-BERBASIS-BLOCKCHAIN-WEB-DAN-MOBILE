// services/cart/cart.service.js
import { Cart } from '../../models/index.js';

export const getOrCreate = async (konsumenId) => {
  let cart = await Cart.findOne({ where: { konsumen_id: konsumenId } });
  if (!cart) cart = await Cart.create({ konsumen_id: konsumenId });
  return cart;
};
