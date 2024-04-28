const Review = require("../models/reviewModel");
const createReviewValidation = require("../validation/createReviewValidation");

async function createReviews(props) {
  console.log(props);

  createReviewValidation(props);

  const response = await Review.create({
    title: props.title,
    description: props.description,
  });
  return response;
}
module.exports = createReviews;
