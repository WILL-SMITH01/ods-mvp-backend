import pool from '../config/database.js';

// Exporta o serviço como um objeto com métodos
export const usageService = {
  // Salva um registro de uso no banco
  async saveUsage(user_id, app_name, time_spent, date) {
    try {
      await pool.query(
        'INSERT INTO app_usage (user_id, app_name, time_spent, date) VALUES (?, ?, ?, ?)',
        [user_id, app_name, time_spent, date]
      );
    } catch (error) {
      throw new Error(`Erro ao salvar uso: ${error.message}`);
    }
  },

  // Busca o histórico de uso de um usuário
  async getUsageByUser(userId) {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM app_usage WHERE user_id = ? ORDER BY date DESC', 
        [userId]
      );
      return rows; // MySQL retorna [rows, fields], então usamos "rows"
    } catch (error) {
      throw new Error(`Erro ao buscar uso: ${error.message}`);
    }
  }
};