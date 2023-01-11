import { pool } from "../db.js";

export const getALL = async (req, res) => {
  try {
    let result = await pool.query("select * from product");
    if (result.rows.length > 0) {
      res.status(200).json({ message: "not have any product in this section" });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
