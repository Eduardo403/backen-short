import Router from "express";
import { pool } from "../db.js";

const route = Router();
route.get("/", async (req, res) => {
  try {
    let result = await pool.query("select * from product");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
});
route.get("/collections", (req, res) => {});
route.get("/men", (req, res) => {
  res.send("Men");
});
route.get("/women", (req, res) => {
  res.send("Women");
});
route.get("/About", (req, res) => {
  res.send("About");
});
route.get("/contact", (req, res) => {
  res.send("Contact");
});
export default route;
