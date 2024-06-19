const Author = require("../models/author");
const asyncHandler = require("express-async-handler");
const Book = require("../models/book")

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({family_name:1});
  res.render("authorlist", {title:"Author List", allAuthors});
});

// Display detail page for a specific Author.
exports.author_detail = asyncHandler(async (req, res, next) => {
  //get details of author and their books
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id),
    Book.find({author:req.params.id},"title summary"),
  ])

  res.render("authordetail", {title: "Author Detail", author, allBooksByAuthor})
});

// Display Author create form on GET.
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.render("author", {title:"Create author"});
});

// Handle Author create on POST.
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
});

// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
});
