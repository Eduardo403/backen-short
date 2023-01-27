import { pool } from "../db.js";
/**this is the controller wiht get all product for category men */
export const getAllMen = async (req, res) => {
  const { category } = req.params;
  try {
    let menRes = await pool.query(
      "select * from  allProduct where category = ?",
      [category]
    );

    res.status(200).json(menRes[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};
/**get only a product for id this is for watch details for this product */
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
