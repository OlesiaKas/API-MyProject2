function createReviewValidation(props) {
  if (
    !props?.RevTitle?.trim() ||
    !props?.RevName.trim() ||
    !props?.RevName !== "string" ||
    !props?.RevTitle !== "string"
  ) {
    throw new Error("RevTitle and RevName are required");
  }
}

module.exports = createReviewValidation;
