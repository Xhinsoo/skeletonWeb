const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User= require("./model/user");
const Book = require("./model/book")

//importing useful node libraries
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//routes directory
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
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
app.use("/", usersRouter);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1/skeleton");
}
main().catch((err) => console.log(err));


app.get("/show", async (req,res)=>{
  const found = Book.findOne({title: "jungle"}).populate("user")
  console.log(found)
})

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
