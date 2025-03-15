import pool from '../config/database.js';

export const usageService = {
  async getUsageByUserId(userId) {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM app_usage WHERE user_id = ?',
        [userId]
      );
      return rows.length > 0 ? rows : null;
    } catch (error) {
      throw new Error(`Erro ao buscar uso: ${error.message}`);
    }
  },

  async saveUsage(userId, appName, timeSpent, date) {
    try {
      await pool.query(
        'INSERT INTO app_usage (user_id, app_name, time_spent, date) VALUES (?, ?, ?, ?)',
        [userId, appName, timeSpent, date]
      );
    } catch (error) {
      throw new Error(`Erro ao salvar uso: ${error.message}`);
    }
  },
};

