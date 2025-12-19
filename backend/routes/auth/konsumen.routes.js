// routes/auth/konsumen.routes.js
import express from 'express';
import * as KonsumenController from '../../controllers/auth/konsumen.controller.js';
import * as KonsumenValidator from '../../validators/auth/konsumen.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', validate(KonsumenValidator.register), KonsumenController.register);
router.post('/login', validate(KonsumenValidator.login), KonsumenController.login);
router.get('/me', authenticate, KonsumenController.me);
router.post('/logout', authenticate, KonsumenController.logout);

export default router;
