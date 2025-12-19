// services/cart/cartItem.service.js
import { CartItem } from '../../models/index.js';

export const addItem = (cartId, data) =>
  CartItem.create({ ...data, cart_id: cartId });
