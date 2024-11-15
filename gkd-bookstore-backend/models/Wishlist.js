const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  book: {
    title: String,
    price: Number
  }
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
