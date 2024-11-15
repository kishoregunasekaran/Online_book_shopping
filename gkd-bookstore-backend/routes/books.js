const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Wishlist = require('../models/Wishlist');

// Route to add a book to the wishlist
router.post('/wishlist/add', async (req, res) => {
  const { userEmail, book } = req.body;
  try {
    const wishlistItem = new Wishlist({ userEmail, book });
    await wishlistItem.save();
    res.status(201).json(wishlistItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get wishlist items for a specific user
router.get('/wishlist/:userEmail', async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find({ userEmail: req.params.userEmail });
    res.json(wishlistItems);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to add a book
router.post('/add', async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route to fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route to edit a book
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route to delete a book
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
