const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  cname: {type: String, required: true},
  cnumber: {type: Number, required: true},
  edate: {type: Date, required: true},
  cvv: {type: Number, required: true},
  saddress: {type: String, required: true},
  zcode: {type: Number, required: true},
  tip: {type: Number, required: true}
})

const User = mongoose.model('User', userSchema)

module.exports = User
