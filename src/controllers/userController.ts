import { Request, Response } from "express";
import connection from "../utils/db_connection";

// user一覧表示
const getAllUsers = (req: Request, res: Response) => {
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM user_tbl");
			connection.end();
      return result;
    })
    .then(function (rows) {
      console.log(rows);
      res.send(rows);
    });
};

export const userController = {
  getAllUsers,
};
