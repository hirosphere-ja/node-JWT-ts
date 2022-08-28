import express, { Request, Response } from "express";
import config from "./config/config";
import userRouter from "./routes/userRouter";

const app = express();

app.use("/api/v1/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello JWT`);
});

app.listen(config.server.port, () => {
  console.log(
    `Example app listening at http://localhost:${config.server.port}`
  );
});
