const mongoose = require("mongoose");

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
