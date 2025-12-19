// validators/cart/cart.validator.js
import Joi from 'joi';

export const create = Joi.object({
  konsumen_id: Joi.string().uuid().required(),
});
