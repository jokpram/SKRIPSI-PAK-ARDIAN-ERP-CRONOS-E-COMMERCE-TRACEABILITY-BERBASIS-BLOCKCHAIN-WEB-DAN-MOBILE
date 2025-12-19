// routes/logistics/logisticPrice.routes.js
import express from 'express';
import * as LogisticPriceController from '../../controllers/logistics/logisticPrice.controller.js';
import * as LogisticPriceValidator from '../../validators/logistics/logisticPrice.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorize(['logistik']),
  validate(LogisticPriceValidator.create),
  LogisticPriceController.create
);

router.put(
  '/:id/approve',
  authenticate,
  authorize(['admin']),
  validate(LogisticPriceValidator.approve),
  LogisticPriceController.approve
);

export default router;
