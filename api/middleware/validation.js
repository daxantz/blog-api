import { body } from "express-validator";

export const validateUser = [
  body("userName")
    .trim()
    .notEmpty()
    .withMessage("username is required")
    .isLength({ min: 3, max: 20 }),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("must be a valid email adress"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 4, max: 16 })
    .withMessage("Password must be between 4 and 16 characters"),
];
