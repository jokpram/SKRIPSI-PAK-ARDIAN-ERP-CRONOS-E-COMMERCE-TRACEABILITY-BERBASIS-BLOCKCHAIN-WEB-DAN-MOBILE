// validators/logistics/logisticPrice.validator.js
import Joi from 'joi';

export const create = Joi.object({
  price_per_km: Joi.number().positive().required(),
});

export const approve = Joi.object({
  approved: Joi.boolean().required(),
});
