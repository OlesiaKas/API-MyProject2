const Review = require("../models/reviewModel");

async function getReviewsById(id) {
  const response = await Review.findById(id);

  console.log(response);
  return response;
}

module.exports = getReviewsById;
