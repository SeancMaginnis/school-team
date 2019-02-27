let mongoose = require('mongoose')
// let Classrooms = require('./classroom')
let Schema = mongoose.Schema


let school = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  type: { type: String },
  capacity: { type: Number },
  // classrooms: { type: Schema.Types.ObjectId, ref: "Classroom", virtual: true }
})


module.exports = mongoose.model("School", school)