import Router, {Request, Response} from "express";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.send("user is working");
});

export default userRouter;
