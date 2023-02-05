import bcrypt from "bcrypt";
import { pool } from "../db.js";
import pkg from "jsonwebtoken";
const { Jwt } = pkg;
/**create new users */

export const auht = async (req, res) => {
  const { username, password, email, role } = req.body;
  try {
    let passHash = await bcrypt.hash(password, 8);
    const resut = await pool.query(
      "INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)",
      [username, passHash, email, role]
    );
    if (!resut.affectedRows === 1) {
      throw new Error(resut.message);
    }
    res.status(204).json({ message: "insert user successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
