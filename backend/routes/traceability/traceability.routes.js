// routes/traceability/traceability.routes.js
import express from 'express';
import * as TraceabilityController from '../../controllers/traceability/traceability.controller.js';
import * as TraceabilityValidator from '../../validators/traceability/traceability.validator.js';
import { authenticate } from '../../middlewares/auth.middleware.js';
import { authorize } from '../../middlewares/role.middleware.js';
import { validate } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validate(TraceabilityValidator.create),
  TraceabilityController.create
);

export default router;
