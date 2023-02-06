import { Router } from "express";
import { auht, login } from "../controllers/users.controllers.js";

const router = Router();

router.post("/newUser", auht);
router.get("/login", login);

export default router;
