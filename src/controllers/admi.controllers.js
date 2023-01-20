import { pool } from "../db.js";

export const admiCreate = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const [rows] = await pool.query(
      "insert into women (name,description, price )  value (?,?,?)",
      [name, description, price]
    );
    res.header("Access-Control-Allow-Origin", "*");

    res.send({
      id: rows.insertId,
      name,
      description,
      price,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
