import { body } from "express-validator";

const userEmailValidate = body("email").isEmail();
const userPasswordValidate = body("password").isLength({ min: 5 });

export const validateController = {
  userEmailValidate,
  userPasswordValidate,
};
