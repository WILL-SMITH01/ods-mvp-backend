import { usageService } from '../services/usageService.js';

export const usageController = {
  async saveUsage(req, res) {
    try {
      const { userId, appName, timeSpent, date } = req.body;
      if (!userId || !appName || !timeSpent || !date) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
      }
      await usageService.saveUsage(userId, appName, timeSpent, date);
      res.status(201).json({ message: 'Uso salvo com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getUsage(req, res) {
    try {
      const { userId } = req.params;
      const usage = await usageService.getUsageByUserId(userId);

      if (!usage) {
        return res.status(404).json({ error: 'Nenhum dado de uso encontrado para este usuário' });
      }

      res.status(200).json(usage);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};