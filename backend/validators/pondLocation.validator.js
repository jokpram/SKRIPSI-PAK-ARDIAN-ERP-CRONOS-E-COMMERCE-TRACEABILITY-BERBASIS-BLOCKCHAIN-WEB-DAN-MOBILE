import Joi from 'joi';

export const create = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  province: Joi.string().required(),
  city: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  area_m2: Joi.number().positive().required(),
});

export const update = Joi.object({
  name: Joi.string().optional(),
  address: Joi.string().optional(),
  province: Joi.string().optional(),
  city: Joi.string().optional(),
  latitude: Joi.number().optional(),
  longitude: Joi.number().optional(),
  area_m2: Joi.number().positive().optional(),
  status: Joi.string().valid('ACTIVE', 'INACTIVE').optional(),
});
