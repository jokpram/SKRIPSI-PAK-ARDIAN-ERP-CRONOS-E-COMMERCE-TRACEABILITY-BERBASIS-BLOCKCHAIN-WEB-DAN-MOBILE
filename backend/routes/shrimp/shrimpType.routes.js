// routes/shrimp/shrimpType.routes.js
import express from 'express';
import * as ShrimpTypeController from '../../controllers/shrimp/shrimpType.controller.js';
import * as ShrimpTypeValidator from '../../validators/shrimp/shrimpType.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validate(ShrimpTypeValidator.create),
  ShrimpTypeController.create
);

router.get('/', authenticate, ShrimpTypeController.list);

export default router;
