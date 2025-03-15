import express from 'express';
import { usageController } from '../controllers/usageController.js';
import { userController } from '../controllers/userController.js';

const router = express.Router();

// Rotas para gerenciamento de uso (app_usage)
router.post('/usage', usageController.saveUsage);
router.get('/usage/:userId', usageController.getUsage);

// Rotas para usuários
router.post('/users/register', userController.register);
router.post('/users/login', userController.login);

export default router;