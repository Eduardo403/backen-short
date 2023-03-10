import bcrypt from "bcrypt";
import { pool } from "../db.js";
import pkg from "jsonwebtoken";
import { JWT_COOKIE_EXPIRATION, JWT_SECRET, JWT_TIMEOUT } from "../config.js";

/**create new users with jwt and bcrypt for the password and insert in database*/

export const auht = async (req, res) => {
  const { username, password, email, role } = req.body;
  try {
    if (!username || !password || !email)
      throw new Error("Required fields are missing");

    if (!role) {
      role = "user";
    }
    let passHash = await bcrypt.hash(password, 8);
    const resut = await pool.query(
      "INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)",
      [username, passHash, email, role]
    );
    if (!resut.affectedRows === 1) {
      throw new Error(resut.message);
    }
    res.status(200).json({ message: "insert user successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
};
/**login user with jwt and manager cookie */
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    /**validate username and password not null*/
    if (!email || !password) throw new Error("Required fields are missing");
    /**query database for user*/
    const response = await pool.query("SELECT * FROM users WHERE email = ? ", [
      email,
    ]);
    /**validate user exists*/

    if (response[0].length === 0) throw new Error("User does not exist");

    /**validate password is correct*/
    let data = response[0];
    if (!(await bcrypt.compare(password, data[0].password)))
      throw new Error("Wrong password");

    /**creata a new token and manager cookie*/
    const id = data[0].id;
    const token = pkg.sign({ id: id }, JWT_SECRET, {
      expiresIn: JWT_TIMEOUT,
    });
    const cookieOptions = {
      expires: new Date(
        Date.now() + JWT_COOKIE_EXPIRATION * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res.cookie("jwt", token, cookieOptions);
    res.status(200).json({ message: "welcoment !" });
  } catch (error) {
    res.status(400).json({ message: error.message, error: error });
  }
};
