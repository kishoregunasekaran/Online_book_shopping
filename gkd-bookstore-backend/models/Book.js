// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  description: String,
  category: String,
  book_image: String,
  book_edit_password: String,
  user_id: String,
  phone_number: String,
  quantity: Number,
  published_year: Number,
  total_pages: Number,
});

module.exports = mongoose.model('Book', bookSchema);

