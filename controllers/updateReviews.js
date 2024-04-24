const { Types } = require("mongoose");

const {
  updateReviewValidation,
} = require("../validation/updateReviewValidation");

const Review = require("../models/reviewModel");

async function updateReviews(id, data) {
  console.log("Update", data);
  updateReviewValidation(id, data);

  const response = await Review.findByIdAndUpdate(id, data, { new: true });
  return response;
}

module.exports = updateReviews;
