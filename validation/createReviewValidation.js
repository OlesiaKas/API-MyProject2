function createReviewValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error("Title is not provided, please provide the title");
  }
  if (!props?.description?.trim()) {
    throw new Error("Description is not provided, please provide the title");
  }
}

module.exports = { createReviewValidation };
