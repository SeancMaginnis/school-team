let mongoose = require('mongoose')
let Classroom = require('./classroom')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId



let teacher = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  subject: { type: String, required: true },
  tenured: { type: Boolean },
  img: { type: String },
  classroom: { type: ObjectId, ref: "Classroom", virtual: true }
})


module.exports = mongoose.model("Teacher", teacher)