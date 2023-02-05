import { Router } from "express";
import { auht } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/newUser", auht);
router.get("/sigint", (req, res) => {
  res.send("login");
});

export default router;
