import { pool } from "../db.js";

export const getAllWomen = async (req, res) => {
  try {
    let womenRes = await pool.query("select * from  women");
    res.status(200).json(womenRes.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getWomenForId = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query(
      "SELECT name,description,price FROM women WHERE id = $1",
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
  //console.log(id);
};
