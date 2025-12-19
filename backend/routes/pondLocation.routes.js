import express from 'express';
import * as PondLocationController from '../../controllers/pond/pondLocation.controller.js';
import * as PondLocationValidator from '../../validators/pond/pondLocation.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.use(authenticate);

router.post(
  '/',
  validate(PondLocationValidator.create),
  PondLocationController.create
);

router.get('/me', PondLocationController.myLocations);

router.put(
  '/:id',
  validate(PondLocationValidator.update),
  PondLocationController.update
);

router.delete('/:id', PondLocationController.remove);

export default router;
