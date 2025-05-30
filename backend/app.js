const express = require("express");

require("dotenv").config();
const cors = require("cors");

require("./models/db");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const usersRouter = require("./routes/user");
const CategoryNamesRouter= require("./routes/category");
app.use("/users", usersRouter);
app.use("/category", CategoryNamesRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
