const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    dish: { type: Schema.Types.ObjectId, ref: "Meal" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    content: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
