import express, { Request, Response } from "express";
import config from "./config/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello JWT`);
});

app.listen(config.server.port, () => {
  console.log(`Example app listening at http://localhost:${config.server.port}`);
});
