const express = require("express");
const { add_category, get_category } = require("../controllers/category");
const CategoryNamesRouter = express.Router();
CategoryNamesRouter.post("/create", add_category);
CategoryNamesRouter.get("/all_category", get_category);

module.exports = CategoryNamesRouter;
