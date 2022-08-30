import Router from "express";
import { userController } from "../controllers/userController";
import { validateController } from "../controllers/validateController";

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.post(
	"/registor",
	validateController.userEmailValidate,
	validateController.userPasswordValidate,
  userController.createUser
);
userRouter.delete("/:email", userController.deleteUser);

export default userRouter;
