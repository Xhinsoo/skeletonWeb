const express = require("express");
const router = express.Router();
const User = require("../models/author");
const Book = require("../models/book");

router.get("/index", async (req, res, next) => {
  res.render("index", { title: "Express" });
});

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
