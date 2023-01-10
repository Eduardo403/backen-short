import { pool } from "../db.js";

export const getALL = async (req, res) => {
  res.render("home");
  try {
    let result = await pool.query("select * from product");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};
