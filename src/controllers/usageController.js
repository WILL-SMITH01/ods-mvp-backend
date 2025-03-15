import { usageService } from '../services/usageService.js';

export const usageController = {
  async saveUsage(req, res) {
    try {
      const { user_id, app_name, time_spent, date } = req.body;
      await usageService.saveUsage(user_id, app_name, time_spent, date);
      res.status(201).json({ message: 'Uso salvo com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getUsage(req, res) {
    try {
      const { userId } = req.params;
      const usage = await usageService.getUsageByUser(userId);
      res.status(200).json(usage);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};