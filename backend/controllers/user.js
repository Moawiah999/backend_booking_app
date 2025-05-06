const pool = require("../models/db");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  console.log("register controllers");
  const role_id = 2;

  const { name, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 5);

  const data = [name, email.toLowerCase(), encryptedPassword, role_id];
  const query = `INSERT INTO users (name, email, password,role_id) VALUES ($1,$2,$3,$4)`;
  pool
    .query(query, data)
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Account created successfully",
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
        error: err,
      });
    });
};
module.exports = {
  register,
};
