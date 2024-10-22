import prisma from "../prisma/database.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
async function signUp(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("validation error");
      return res.status(400).json({ errors: errors.array() });
    }
    const { userName, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { userName: userName, email: email, password: hashedPass },
    });
    console.log("new user created: ", user);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

export { signUp };
