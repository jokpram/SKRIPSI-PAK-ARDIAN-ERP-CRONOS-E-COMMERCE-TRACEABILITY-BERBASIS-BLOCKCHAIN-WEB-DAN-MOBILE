// routes/auth/petambak.routes.js
import express from 'express';
import * as PetambakController from '../../controllers/auth/petambak.controller.js';
import * as PetambakValidator from '../../validators/auth/petambak.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', validate(PetambakValidator.register), PetambakController.register);
router.post('/login', validate(PetambakValidator.login), PetambakController.login);
router.get('/me', authenticate, PetambakController.me);
router.post('/logout', authenticate, PetambakController.logout);

export default router;
