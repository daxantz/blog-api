import { Router } from "express";
import { validateUser } from "../middleware/validation.js";
import { signUp } from "../controllers/register.js";

const router = Router();

router.get("/login", (req, res) => {
  res.json({ message: "got the login page" });
});

router.post("/sign-up", validateUser, signUp);

export default router;
