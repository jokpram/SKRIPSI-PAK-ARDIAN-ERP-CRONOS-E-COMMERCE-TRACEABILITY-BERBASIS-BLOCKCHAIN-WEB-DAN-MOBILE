// validators/shrimp/shrimpType.validator.js
import Joi from 'joi';

export const create = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow('').optional(),
});
