import { pool } from "../db.js";

/**get all data for table allProduct for women and for men*/
export const getProductForCategory = async (req, res) => {
  const { category } = req.params;
  try {
    let womenRes = await pool.query(
      "select * from  allProduct where category = ?",
      [category]
    );

    res.status(200).json(womenRes[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**select product or more details in the views*/
export const getProductForId = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query(
      "SELECT nameProduc, descriptionProduct, price, imag FROM allProduct WHERE id = ?",
      [id]
    );

    if (response[0].length == 0)
      res.status(404).json({ message: "product not found" });
    res.status(200).json(response[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**  serach product for name or shoes brand*/
export const getProductForName = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await pool.query(
      "SELECT nameProduc, descriptionProduct, price, imag FROM allProduct WHERE nameProduc = ?",
      [name]
    );

    if (response[0].length == 0)
      res.status(404).json({ message: "product not found" });
    res.status(200).json(response[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
