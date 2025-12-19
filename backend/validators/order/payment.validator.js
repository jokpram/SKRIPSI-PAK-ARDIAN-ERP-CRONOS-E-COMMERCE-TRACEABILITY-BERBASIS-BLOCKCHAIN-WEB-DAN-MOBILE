// validators/order/payment.validator.js
import Joi from 'joi';

export const create = Joi.object({
  order_id: Joi.string().uuid().required(),
  amount: Joi.number().positive().required(),
});
