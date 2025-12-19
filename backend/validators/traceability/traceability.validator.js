// validators/traceability/traceability.validator.js
import Joi from 'joi';

export const create = Joi.object({
  order_id: Joi.string().uuid().required(),
  origin: Joi.string().required(),
});
