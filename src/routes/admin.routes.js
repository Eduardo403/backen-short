import { Router } from "express";
import { pool } from "../db.js";

const route = Router();

route.get("/admi", (req, res) => {});

route.post("/admi/create", async (req, res) => {
  const { name, description, price, categori } = req.body;
  try {
    let insertProdut = await pool.query(
      `insert into ${categori}(name, description, price,image) values('$1', '$2',$2,'$4');
`,
      [name, description, price]
    );
  } catch (error) {}
});

export default route;
