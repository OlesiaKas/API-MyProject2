const { Router } = require("express");

const router = Router();
router.get("/", (req, res) => {
  res.send("get all reviews");
});
router.get("/:id", (req, res) => {
  res.send("get review by id");
});

module.exports = router;
