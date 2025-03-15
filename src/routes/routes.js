import express from 'express';
import { usageController } from '../controllers/usageController.js';
import { userController } from '../controllers/userController.js';

const router = express.Router();

// Rotas para usuários
router.post('/users/register', userController.register);
router.post('/users/login', userController.login);

// Rotas para gerenciamento de uso (app_usage)
router.get('/usage/:userId', usageController.getUsage);
router.post('/usage', usageController.saveUsage);



export default router;