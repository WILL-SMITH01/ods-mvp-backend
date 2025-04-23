import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'app_user',
  password: process.env.DB_PASSWORD || 'app_pass123',
  database: process.env.DB_NAME || 'mvp_ods_db',
  port: process.env.DB_PORT || 3307,
});

export default pool;