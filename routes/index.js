const express = require("express");
const router = express.Router();
const User = require("../model/author");
const Book = require("../model/book");

// router.get("/index", async (req, res, next) => {
//   // const user =  new User({ user: "user1", age: 23, book: '665a2ecd6c3971e437e13914'});

//   // await user.save();

//   // const book =  new Book({title:"jungle", user: "665a32435648421704d21803"})
//   // await book.save();
//   const find = await Book.find({ user: "665a32435648421704d21803" });
//   console.log(find);

//   res.render("index", { title: "Express" });
// });

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
