import pool from '../config/database.js';

// Exporta o serviço como um objeto com métodos
export const userService = {
  // Cria um novo usuário no banco
  async createUser(name, email, password) {
    try {
      const [result] = await pool.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
      );
      return result.insertId; // Retorna o ID do novo usuário
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  },

  // Busca um usuário por email (pra login, vamos usar depois)
  async findUserByEmail(email) {
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [
        email,
      ]);
      return rows[0]; // Retorna o primeiro usuário encontrado (ou undefined)
    } catch (error) {
      throw new Error(`Erro ao buscar usuário: ${error.message}`);
    }
  },
};