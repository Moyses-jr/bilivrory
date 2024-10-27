const mongoose = require("mongoose");

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
