import mysql from "promise-mysql";
import config from "../config/config";

const db = {
	user: config.mysql.user,
	password: config.mysql.password,
	host: config.mysql.host,
	database: config.mysql.database
};

const connection = async () => {
  return await mysql.createConnection(db);
};

export default connection;
