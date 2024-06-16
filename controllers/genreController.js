const Genre = require("../models/genre");
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of all Genre.
exports.genre_list = asyncHandler(async (req, res, next) => {
  const allGenre = await Genre.find({})
  res.render("genrelist", {allGenre});
});

// Display detail page for a specific Genre.
exports.genre_detail = asyncHandler(async (req, res, next) => {
  // const id = req.params.id
  // const genreDetail = await Genre.findOne({_id: id})
  // res.render("genredetail", {genreDetail});
  const [genre, booksInGenre] = await Promise.all([
    Genre.findById(req.params.id),
    Book.find({genre:req.params.id},"title summary")
  ])
  console.log(booksInGenre)
  res.render("genreDetail", {title: "Genre Detail", genre, genreBooks: booksInGenre})
});


// Display detail page for a specific Genre.
exports.genre_detail_post = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const genreDelete = await Genre.findOneAndDelete({_id: id})
  res.redirect("http://localhost:3000/catalog/genres");
});

// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre", { title: "Create Genre" });
};

// Handle Genre create on POST.
exports.genre_create_post = [
  // Validate and sanitize the name field.
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    const genre = new Genre({ name: req.body.name });
    console.log(genre)

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Check if Genre with same name already exists.
      const genreDetail = await Genre.findOne({ name: req.body.name })
        .collation({ locale: "en", strength: 2 })
        .exec();
      if(genreDetail) {
        res.render("genredetail", {genreDetail})
      } else {
        await genre.save();
        // // New genre saved. Redirect to genre detail page.
        res.redirect(`http://localhost:3000/catalog/genre/${genre._id}`);
      }
    }
  }),
];

// Display Genre delete form on GET.
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
});

// Handle Genre delete on POST.
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  console.log(id)
  const deleteGenre = await Genre.findByIdAndDelete({_id:id})
  // res.redirect("/genres");
});

// Display Genre update form on GET.
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const genreDetail = await Genre.findOne({_id:id})
  // console.log(genreDetail)
  res.render("genreUpdateGet", {genreDetail});
});

// Handle Genre update on POST.
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  let genre = await Genre.findOne({_id: id})
  genre.name = req.body.name
  await genre.save()
  res.redirect("http://localhost:3000/catalog/genres")
});
