function createReviewValidation(props) {
  if (
    !props?.title?.trim() ||
    !props?.description.trim() ||
    !props?.description !== "string" ||
    !props?.title !== "string"
  ) {
    throw new Error("title and description are required");
  }
}

module.exports = createReviewValidation;
