// routes/shrimp/shrimpSeed.routes.js
import express from 'express';
import * as ShrimpSeedController from '../../controllers/shrimp/shrimpSeed.controller.js';
import * as ShrimpSeedValidator from '../../validators/shrimp/shrimpSeed.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorize(['petambak']),
  validate(ShrimpSeedValidator.create),
  ShrimpSeedController.create
);

export default router;
