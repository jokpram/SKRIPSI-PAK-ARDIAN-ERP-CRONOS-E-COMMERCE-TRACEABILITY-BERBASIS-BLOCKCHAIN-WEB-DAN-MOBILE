// routes/auth/refreshToken.routes.js
import express from 'express';
import * as RefreshTokenController from '../../controllers/auth/refreshToken.controller.js';
import * as RefreshTokenValidator from '../../validators/auth/refreshToken.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/refresh',
  validate(RefreshTokenValidator.refresh),
  RefreshTokenController.refresh
);

export default router;
