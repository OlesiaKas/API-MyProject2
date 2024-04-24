const { Router } = require("express");
const { getAllReviews, getReviewsById } = require("../controllers/");

const router = Router();
// GET / review
router.get("/", async (req, res) => {
  try {
    const data = await getAllReviews(req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});
// GET / review/:id
router.get("/:id", async (req, res) => {
  try {
    const data = await getReviewsById(req.params.id);
    res.json(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
