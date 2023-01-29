import { Router } from "express";

const router = Router();

router.post("/newUser", (req, res) => {});
router.get("/sigint", (req, res) => {
  res.send("login");
});
