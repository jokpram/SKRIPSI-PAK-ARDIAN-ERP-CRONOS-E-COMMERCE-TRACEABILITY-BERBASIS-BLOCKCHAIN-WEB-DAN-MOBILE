// routes/auth/admin.routes.js
import express from 'express';
import * as AdminController from '../../controllers/auth/admin.controller.js';
import * as AdminValidator from '../../validators/auth/admin.validator.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { authenticate } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', validate(AdminValidator.register), AdminController.register);
router.post('/login', validate(AdminValidator.login), AdminController.login);
router.get('/me', authenticate, AdminController.me);
router.post('/logout', authenticate, AdminController.logout);

export default router;
