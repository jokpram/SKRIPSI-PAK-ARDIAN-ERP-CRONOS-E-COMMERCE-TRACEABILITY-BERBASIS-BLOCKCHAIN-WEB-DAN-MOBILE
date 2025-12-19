// routes/order/payment.routes.js
import express from 'express';
import * as PaymentController from '../../controllers/order/payment.controller.js';
import * as PaymentValidator from '../../validators/order/payment.validator.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';
import { validate } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorize(['konsumen']),
  validate(PaymentValidator.create),
  PaymentController.create
);

router.put(
  '/:id/confirm',
  authenticate,
  authorize(['admin']),
  PaymentController.confirm
);

export default router;
