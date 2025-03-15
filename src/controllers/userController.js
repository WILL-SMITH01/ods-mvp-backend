import { userService } from '../services/userService.js';

export const userController = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: 'Nome, email e senha são obrigatórios' });
      }

      const userId = await userService.createUser(name, email, password);
      res.status(201).json({ message: 'Usuário criado com sucesso', userId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ error: 'Email e senha são obrigatórios' });
      }

      const user = await userService.findUserByEmail(email);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: 'Senha incorreta' });
      }

      res.status(200).json({
        message: 'Login bem-sucedido',
        userId: user.id,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};