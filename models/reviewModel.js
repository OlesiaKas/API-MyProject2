const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  RevTitle: {
    type: String,
    required: true,
  },
  RevName: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
