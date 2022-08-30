import Router from "express";
import { userController } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

export default userRouter;
