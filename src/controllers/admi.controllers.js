import { pool } from "../db.js";

/**create a new product only admi an moderator can create a new product this is protect route*/
export const newProduct = async (req, res) => {
  const { name, description, price, image, category } = req.body;
  console.log(category);
  try {
    if (!name || !description || !price || !image || !category)
      throw new Error("missing something data in the form");
    const response = await pool.query(
      "INSERT INTO allProduct (nameProduc, descriptionProduct, price, imag ,category)  VALUES(?, ?, ?, ?,?)",
      [name, description, price, image, category]
    );
    if (!response.affectedRows === 1)
      throw new Error("conection whit  dataBase failed");

    res.status(200).json({ message: "insert data successfully" });
  } catch (error) {
    return res.status(400).json(error.message || error);
  }
};
