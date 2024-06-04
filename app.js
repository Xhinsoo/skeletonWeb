const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoDb ="mongodb+srv://xmrwow:Sabina1992@cluster0.pklccub.mongodb.net/loocal_library?retryWrites=true&w=majority&appName=cluster0"
const User = require("./models/author");
const Book = require("./models/book");

//importing useful node libraries
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const asyncHandler = require("express-async-handler");
//routes directory
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog");
//set views directory and view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//fn call to add imported middleware libraries into req handling chain
app.use(logger("xhin"));
app.use(express.json()); //populate req.body
app.use(express.urlencoded({ extended: false })); //populate req.body
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //serve static files

//adding route handlers to req handling chain
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);

async function main() {
  await mongoose.connect(mongoDb);
}
main().catch((err) => console.log(err));

//error handlers
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("eng") === "development" ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen("3000", (req, res) => {
  console.log("listening 3000");
});
