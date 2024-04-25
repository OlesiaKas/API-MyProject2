const mongoose = require("mongoose");
const cors = require("cors");

const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use("/reviews", require("./routes/reviewGetterRouts"));
app.use("/reviews", require("./routes/reviewSetterRouts"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("database connected");
  } catch (err) {
    console.log("connectDB ERROR", err.message);
  }
};
connectDB();

app.listen(port, () => {
  console.log(`MyProject2 is listening at http://localhost:${port}`);
});
