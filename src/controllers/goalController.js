import { goalService } from '../services/goalService.js';

export const goalController = {
  // Salvar uma nova meta
  async saveGoal(req, res) {
    try {
      const { userId, goalDescription, targetTime, status } = req.body;
      if (!userId || !goalDescription || !targetTime || !status) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
      }
      const goalId = await goalService.saveGoal(userId, goalDescription, targetTime, status);
      res.status(201).json({ message: 'Meta salva com sucesso', goalId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar metas de um usuário
  async getGoals(req, res) {
    try {
      const { userId } = req.params;
      const goals = await goalService.getGoalsByUserId(userId);
      if (!goals) {
        return res.status(404).json({ error: 'Nenhuma meta encontrada para este usuário' });
      }
      res.status(200).json(goals);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Atualizar o status de uma meta
  async updateGoalStatus(req, res) {
    try {
      const { goalId } = req.params;
      const { status } = req.body;
      if (!status) {
        return res.status(400).json({ error: 'Status é obrigatório' });
      }
      await goalService.updateGoalStatus(goalId, status);
      res.status(200).json({ message: 'Status atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Deletar uma meta
  async deleteGoal(req, res) {
    try {
      const { goalId } = req.params;
      await goalService.deleteGoal(goalId);
      res.status(200).json({ message: 'Meta deletada com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};