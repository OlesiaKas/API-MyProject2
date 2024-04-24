const Review = require("../models/reviewModel");
const createReviewValidation = require("../validation/createReviewValidation");

async function createReviews(props) {
  console.log(props);

  createReviewValidation(props);

  const response = await Review.create({
    RevTitle: props.RevTitle,
    RevName: props.RevName,
  });
  return response;
}
module.exports = createReviews;
