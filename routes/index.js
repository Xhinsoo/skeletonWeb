const express = require("express");
const router = express.Router();
const User = require("../model/author");
const Book = require("../model/book");

router.get("/index", async (req, res, next) => {

  res.render("index", { title: "Express" });
});

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
