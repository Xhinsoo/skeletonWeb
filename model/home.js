const mongoose = require("mongoose");
//define schema
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  user: String,
  date: Date,
});

//compile model from schema using mongoose.model() method
//first argument is the singular name of the collection, second argument is Schema
const Model = mongoose.model("Model", ModelSchema);
