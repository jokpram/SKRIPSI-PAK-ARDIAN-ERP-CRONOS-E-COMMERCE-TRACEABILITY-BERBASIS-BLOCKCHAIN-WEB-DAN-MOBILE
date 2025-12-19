// routes/index.js
import express from 'express';

import adminRoutes from './auth/admin.routes.js';
import petambakRoutes from './auth/petambak.routes.js';
import logistikRoutes from './auth/logistik.routes.js';
import konsumenRoutes from './auth/konsumen.routes.js';
import refreshTokenRoutes from './auth/refreshToken.routes.js';

import shrimpTypeRoutes from './shrimp/shrimpType.routes.js';
import shrimpSeedRoutes from './shrimp/shrimpSeed.routes.js';
import shrimpPriceRoutes from './shrimp/shrimpPrice.routes.js';

import logisticPriceRoutes from './logistics/logisticPrice.routes.js';

import cartRoutes from './cart/cart.routes.js';
import cartItemRoutes from './cart/cartItem.routes.js';

import orderRoutes from './order/order.routes.js';
import paymentRoutes from './order/payment.routes.js';

import traceabilityRoutes from './traceability/traceability.routes.js';
import pondLocationRoutes from './pond/pondLocation.routes.js';

const router = express.Router();

/* AUTH */
router.use('/auth/admin', adminRoutes);
router.use('/auth/petambak', petambakRoutes);
router.use('/auth/logistik', logistikRoutes);
router.use('/auth/konsumen', konsumenRoutes);
router.use('/auth', refreshTokenRoutes);

/* SHRIMP */
router.use('/shrimp/types', shrimpTypeRoutes);
router.use('/shrimp/seeds', shrimpSeedRoutes);
router.use('/shrimp/prices', shrimpPriceRoutes);

/* LOGISTICS */
router.use('/logistics/prices', logisticPriceRoutes);

/* CART */
router.use('/cart', cartRoutes);
router.use('/cart/items', cartItemRoutes);

/* ORDER */
router.use('/orders', orderRoutes);
router.use('/payments', paymentRoutes);

/* TRACEABILITY */
router.use('/traceability', traceabilityRoutes);

/* PETAMBAK */
router.use('/pond/locations', pondLocationRoutes);

export default router;
