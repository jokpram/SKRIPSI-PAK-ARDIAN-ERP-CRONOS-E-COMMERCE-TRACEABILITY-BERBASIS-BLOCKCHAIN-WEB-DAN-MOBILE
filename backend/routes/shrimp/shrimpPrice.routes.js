// routes/shrimp/shrimpPrice.routes.js
import express from 'express';
import * as ShrimpPriceController from '../../controllers/shrimp/shrimpPrice.controller.js';
import * as ShrimpPriceValidator from '../../validators/shrimp/shrimpPrice.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorize(['petambak']),
  validate(ShrimpPriceValidator.create),
  ShrimpPriceController.create
);

router.put(
  '/:id/approve',
  authenticate,
  authorize(['admin']),
  validate(ShrimpPriceValidator.approve),
  ShrimpPriceController.approve
);

export default router;
