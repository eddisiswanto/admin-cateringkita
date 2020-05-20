const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pekerjaan: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Testimonial', testimonialSchema)