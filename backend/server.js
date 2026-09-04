const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/auth/routes");
const articleRoutes = require("./src/articles/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
