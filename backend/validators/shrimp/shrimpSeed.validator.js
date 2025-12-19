// validators/shrimp/shrimpSeed.validator.js
import Joi from 'joi';

export const create = Joi.object({
  shrimp_type_id: Joi.string().uuid().required(),
  supplier: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
});
