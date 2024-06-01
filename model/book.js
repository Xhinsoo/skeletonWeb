const mongoose = require("mongoose");
const User = require("./author");

//define schema
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
