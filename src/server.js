import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import cors from 'cors';

// Carrega variáveis de ambiente do .env
dotenv.config();

// Cria a aplicação Express
const app = express();

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Permitir requisições de outras origens
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Usa as rotas definidas em routes.js com o prefixo /api
app.use('/api', router);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});