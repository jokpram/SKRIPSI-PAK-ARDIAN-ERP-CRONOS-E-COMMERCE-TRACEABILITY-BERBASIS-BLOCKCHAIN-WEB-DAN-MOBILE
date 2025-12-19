// routes/auth/logistik.routes.js
import express from 'express';
import * as LogistikController from '../../controllers/auth/logistik.controller.js';
import * as LogistikValidator from '../../validators/auth/logistik.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', validate(LogistikValidator.register), LogistikController.register);
router.post('/login', validate(LogistikValidator.login), LogistikController.login);
router.get('/me', authenticate, LogistikController.me);
router.post('/logout', authenticate, LogistikController.logout);

export default router;
