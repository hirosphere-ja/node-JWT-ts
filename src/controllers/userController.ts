import { Request, Response } from "express";
import connection from "../utils/db_connection";
import { validationResult } from "express-validator";

// user一覧表示
const getAllUsers = (req: Request, res: Response) => {
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM user_tbl");
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
};

// user登録
const createUser = (req: Request, res: Response) => {
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
	}
  connection()
    .then((connection) => {
      const result = connection.query(
        "INSERT INTO user_tbl(username, email, password) values(?, ?, ?)",
        [username, email, password]
      );
      connection.end();
      return result;
    })
		.then(function (rows) {
      res.send(rows);
    });
};

// user削除
const deleteUser = (req: Request, res: Response) => {
  const { email } = req.params;
  connection()
    .then((connection) => {
			const result = connection.query(
				"DELETE FROM user_tbl WHERE email = ?;",
        [email]
      );
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
};

export const userController = {
  getAllUsers,
	createUser,
	deleteUser
};
