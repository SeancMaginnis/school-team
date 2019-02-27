let mongoose = require('mongoose')
let Schema = mongoose.Schema
let Teacher = require("./teacher")
let ObjectId = Schema.Types.ObjectId


let student = new Schema({
  name: { type: String, required: true },
  grade: { type: Number, required: true },
  age: { type: Number },
  img: { type: String },
  teacher: { type: ObjectId, ref: "Teacher", virtual: true }
})


module.exports = mongoose.model("Student", student)