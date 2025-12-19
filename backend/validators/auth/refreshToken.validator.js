// validators/auth/refreshToken.validator.js
import Joi from 'joi';

export const refresh = Joi.object({
  refresh_token: Joi.string().required(),
});
