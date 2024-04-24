const { Router } = require("express");

const { createReviews, updateReviews } = require("../controllers/");

const router = Router();

// POST / reviews

router.post("/", async (req, res) => {
  try {
    const data = await createReviews(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await updateReviews(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
