import express from 'express';
import { usageController } from '../controllers/usageController.js';
import { userController } from '../controllers/userController.js';
import { goalController } from '../controllers/goalController.js';

const router = express.Router();

// Rotas para usuários
router.post('/users/register', userController.register);
router.post('/users/login', userController.login);

// Rotas para gerenciamento de uso (app_usage)
router.post('/usage', usageController.saveUsage);
router.get('/usage/:userId', usageController.getUsage);

// Rotas para metas (goals)
router.post('/goals', goalController.saveGoal);
router.get('/goals/:userId', goalController.getGoals);
router.put('/goals/:goalId', goalController.updateGoalStatus);
router.delete('/goals/:goalId', goalController.deleteGoal);

export default router;