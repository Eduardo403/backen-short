import { pool } from "../db.js";

export const getAllMen = async (req, res) => {
  try {
    let menRes = await pool.query("select * from  men");
    res.status(200).json(menRes.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getMenForId = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query(
      "SELECT name,description,price FROM men WHERE id = $1",
      [id]
    );
    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
