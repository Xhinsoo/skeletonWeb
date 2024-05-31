const express = require("express");
const router = express.Router();
const User = require("../model/user");
const Book = require("../model/book");

router.get("/index", async (req, res, next) => {
  const user = new User({ name: "shin", age: 23 });
  await user.save();
  const book = new Book({ title: "jungle" });
  await book.save();

  res.render("index", { title: "Express" });
});




module.exports = router;
