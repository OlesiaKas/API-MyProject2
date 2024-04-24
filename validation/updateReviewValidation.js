const { Types } = require("mongoose");

function updateReviewValidation(id, data) {
  if (
    !data ||
    (!data.hasOwnProperty("RevTitle") && !data.hasOwnProperty("RevName"))
  ) {
    throw new Error("data is required");
  }
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("ID is required");
  }
}
module.exports = { updateReviewValidation };
