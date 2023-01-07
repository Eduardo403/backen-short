import Router from "express";
import { getALL } from "../controllers/shor.contollers.js";
import { pool } from "../db.js";

const route = Router();
route.get("/", getALL);
route.get("/collections", (req, res) => {});
route.get("/men", async (req, res) => {
  try {
    let menRes = await pool.query("select * from  men");
    res.status(200).json(menRes.rows);
  } catch (error) {
    res.status(500).json(error);
  }
});
route.get("/women", (req, res) => {
  res.send("Women");
});

export default route;
