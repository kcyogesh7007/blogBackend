const express = require("express");
const app = express();

require("dotenv").config();
require("./database/database");

app.use(express.json());

const blogRoute = require("./routes/blogRoute");

app.use("/api", blogRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
