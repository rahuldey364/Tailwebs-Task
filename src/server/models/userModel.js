const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
},
  password: {
    type: String,
    required: true,
    trim: true
  },
  students:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student"
  }]
}, { timestamps: true })


module.exports = mongoose.model('User', userSchema)