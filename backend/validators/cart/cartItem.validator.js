// validators/cart/cartItem.validator.js
import Joi from 'joi';

export const add = Joi.object({
  shrimp_price_id: Joi.string().uuid().required(),
  quantity: Joi.number().integer().min(1).required(),
});
