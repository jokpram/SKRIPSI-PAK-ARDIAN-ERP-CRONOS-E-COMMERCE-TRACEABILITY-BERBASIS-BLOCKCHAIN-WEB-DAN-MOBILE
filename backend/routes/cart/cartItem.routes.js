// routes/cart/cartItem.routes.js
import express from 'express';
import * as CartItemController from '../../controllers/cart/cartItem.controller.js';
import * as CartItemValidator from '../../validators/cart/cartItem.validator.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';
import { validate } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorize(['konsumen']),
  validate(CartItemValidator.add),
  CartItemController.addItem
);

export default router;
