import { pool } from "../db.js";

/**create a new product only admin or the moderator can create a new product this is protected route*/
export const newProduct = async (req, res) => {
  const { name, description, price, image, category } = req.body;

  try {
    if (!name || !description || !price || !image || !category) {
      return res
        .status(404)
        .json({ message: "something fields  is missing data ,please review" });
    }

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
/**update product  this route is only for admin and moderator is a protected route  */
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image, category } = req.body;
  try {
    if (!name || !description || !price || !image || !category) {
      return res
        .status(404)
        .json({ message: "something fields  is missing data ,please review" });
    }

    const updateProduct = await pool.query(
      "UPDATE allProduct SET nameProduc=?, descriptionProduct=?, price=?, imag=? ,category=? WHERE id =? ",
      [name, description, price, image, category, id]
    );
    if (!updateProduct.affectedRows === 1)
      throw new Error("something went wrong whit dataBase failed");
    const dataUpdate = await pool.query(
      "SELECT * FROM allProduct WHERE id =? ",
      [id]
    );
    res.status(200).json(dataUpdate[0]);
  } catch (error) {
    return res.status(400).json(error.message || error);
  }
};

/** delete product */

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await pool.query(
      "DELETE FROM allProduct WHERE id =?",
      [id]
    );
    if (deleteProduct.affectedRows === 0)
      res.status(404).json({ message: "not can delete product" });
    res.status(204);
  } catch (error) {
    return res.status(400).json(error.message || error);
  }
};
