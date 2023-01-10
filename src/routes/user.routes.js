import { Router } from "express";

const router = Router();

router.get("/sigint", (req, res) => {
  res.send("login");
});

router.post("/newUser", (req, res) => {});
