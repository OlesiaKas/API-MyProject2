const { Router } = require("express");
const { getAllReviews, getReviewsById } = require("../controllers/");

const router = Router();
// GET / reviews

router.get("/", (req, res) => {
  const data = getAllReviews();
  res.json(data);
});

// GET / reviews/:id
router.get("/:id", (req, res) => {
  const data = getReviewsById();
  res.json(data);
});

module.exports = router;
