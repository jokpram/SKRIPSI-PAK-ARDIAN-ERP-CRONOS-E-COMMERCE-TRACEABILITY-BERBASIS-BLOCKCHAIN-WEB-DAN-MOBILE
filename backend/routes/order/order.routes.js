// routes/order/order.routes.js
import express from 'express';
import * as OrderController from '../../controllers/order/order.controller.js';
import * as OrderValidator from '../../validators/order/order.validator.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';
import { validate } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/checkout',
  authenticate,
  authorize(['konsumen']),
  validate(OrderValidator.checkout),
  OrderController.checkout
);

export default router;
