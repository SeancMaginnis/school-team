let mongoose = require('mongoose')
let School = require('./school')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId



let classroom = new Schema({
  roomNumber: { type: Number, required: true },
  description: { type: String },
  desks: { type: Number },
  school: { type: ObjectId, ref: "School", virtual: true }

})


module.exports = mongoose.model("Classroom", classroom)