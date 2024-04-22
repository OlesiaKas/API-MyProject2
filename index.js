const express = require("express");
const app = express();
const port = 3000;

const reviewGetterRouts = require("./routes/reviewGetterRouts");

app.use("/reviews", reviewGetterRouts);

app.post("/reviews", (req, res) => {
  res.send("BackEnd MyProjeck2");
});

app.listen(port, () => {
  console.log(`MyProject2 is listening at http://localhost:${port}`);
});
