// validators/auth/logistik.validator.js
import Joi from 'joi';

export const register = Joi.object({
  company_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
