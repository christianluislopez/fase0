const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const sequelize = require("./config/database");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", bookRoutes);

app.listen(5000, async () => {
  await sequelize.authenticate();
  console.log("Server running on port 5000");
});
