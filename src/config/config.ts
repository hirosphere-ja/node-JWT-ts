import dotenv from "dotenv";
import path from "path";

const ENV_PATH = path.join(__dirname, "../../.env");

dotenv.config({ path: ENV_PATH });

const SERVER_HOST = process.env.SERVER_HOST || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const SERVER = {
  hostname: SERVER_HOST,
  port: SERVER_PORT,
};

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "root";
const DB_DATABASE = process.env.DB_DATABASE || "usstocks_db";

const MYSQL = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

const config = {
  mysql: MYSQL,
  server: SERVER,
  env_path: ENV_PATH,
};

export default config;
