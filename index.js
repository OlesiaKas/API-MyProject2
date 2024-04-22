const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/reviews", require("./routes/reviewGetterRouts"));
app.use("/reviews", require("./routes/reviewSetterRouts"));

app.listen(port, () => {
  console.log(`MyProject2 is listening at http://localhost:${port}`);
});
