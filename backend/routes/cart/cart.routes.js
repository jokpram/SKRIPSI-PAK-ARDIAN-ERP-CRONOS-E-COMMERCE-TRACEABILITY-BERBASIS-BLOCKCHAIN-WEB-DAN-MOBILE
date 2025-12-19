// routes/cart/cart.routes.js
import express from 'express';
import * as CartController from '../../controllers/cart/cart.controller.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';

const router = express.Router();

router.get(
  '/',
  authenticate,
  authorize(['konsumen']),
  CartController.getMyCart
);

export default router;
