import Router, { Request, Response } from "express";
import connection from "../utils/db_connection";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM user_tbl");
      connection.end();
      return result;
    })
    .then((rows) => {
      res.send(rows);
    });
});

export default userRouter;
