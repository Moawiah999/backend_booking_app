const express = require("express");
const { register } = require("../controllers/user");
const usersRouter = express.Router();
usersRouter.post("/register", register);
module.exports = usersRouter;
