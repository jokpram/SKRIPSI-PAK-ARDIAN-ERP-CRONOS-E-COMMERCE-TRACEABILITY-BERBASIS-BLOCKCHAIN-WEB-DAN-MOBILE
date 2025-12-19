// validators/order/order.validator.js
import Joi from 'joi';

export const checkout = Joi.object({
  logistic_price_id: Joi.string().uuid().required(),
  address: Joi.string().required(),
});
