// validators/shrimp/shrimpPrice.validator.js
import Joi from 'joi';

export const create = Joi.object({
  shrimp_type_id: Joi.string().uuid().required(),
  price: Joi.number().positive().required(),
});

export const approve = Joi.object({
  approved: Joi.boolean().required(),
});
