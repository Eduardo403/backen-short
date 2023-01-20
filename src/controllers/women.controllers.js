import { pool } from "../db.js";
//get all data for table product
export const getAllWomen = async (req, res) => {
  try {
    let womenRes = await pool.query("select * from  women");

    res.status(200).json(womenRes[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};
// select product or more details
export const getWomenForId = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query(
      "SELECT nameProduc, descriptionProduct, price, imag FROM women WHERE id = ?",
      [id]
    );

    if (response[0].length == 0)
      res.status(404).json({ message: "product not found" });
    res.status(200).json(response[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// serach product for name or shoes brand
export const getWomenForName = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await pool.query(
      "SELECT nameProduc, descriptionProduct, price, imag FROM women WHERE nameProduc = ?",
      [name]
    );

    if (response[0].length == 0)
      res.status(404).json({ message: "product not found" });
    res.status(200).json(response[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//create a new product only andmi an moderator
export const admiCreate = async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    if (!name || !description || !price || !image)
      throw new Error("missing something data in the form");
    const response = await pool.query(
      "INSERT INTO women (nameProduc, descriptionProduct, price, imag )  VALUES(?, ?, ?, ?)",
      [name, description, price, image]
    );
    if (!response.affectedRows === 1)
      throw new Error("conection whit  dataBase failed");

    res.status(200).json({ message: "insert data successfully" });
  } catch (error) {
    return res.status(400).json(error.message || error);
  }
};
