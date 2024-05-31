const mongoose = require("mongoose");

//define schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: String,
  age: Number,
  book:[{
    type: Schema.Types.ObjectId, ref: "Book"
  }

  ]
});

//compile model from schema using mongoose.model() method
//first argument is the singular name of the collection, second argument is Schema
const User =  mongoose.model("User", UserSchema);

module.exports = User;




