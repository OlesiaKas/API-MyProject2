const { Router } = require("express");

const { createReviews, updateReviews } = require("../controllers/");

const router = Router();

// POST / reviews

router.post("/", (req, res) => {
  const data = createReviews(req.body);
  res.json(data);
});

router.patch("/:id", (req, res) => {
  const data = updateReviews();
  res.json(data);
});

module.exports = router;
