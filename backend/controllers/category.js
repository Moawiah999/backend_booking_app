const pool = require("../models/db");
const add_category = (req, res) => {
  const { name_category, image_path } = req.body;

  const data = [name_category, image_path];
  const query =
    "INSERT INTO category (name_category, image_path) VALUES ($1,$2)";
  pool
    .query(query, data)
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Data added successfully",
      });
    })
    .catch(() => {
      res.status(400).json({
        success: false,
        message: "Error adding data",
      });
    });
};
const get_category = (req, res) => {
  const query = "SELECT name_category, image_path FROM category";
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "get data successfully",
        res: result.rows,
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Data fetching error",
        res: err,
      });
    });
};
module.exports = {
  add_category,
  get_category,
};
