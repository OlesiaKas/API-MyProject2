const Review = require("../models/reviewModel");

async function getAllReviews() {
  const data = await Review.find();
  console.log(data);
  return data;
}

module.exports = getAllReviews;
