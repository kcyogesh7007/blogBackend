const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is live",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
