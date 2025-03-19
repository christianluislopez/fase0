const express = require('express');
const router = express.Router();
const bookController = require('./book.controller');

router.get('/',(req, res) => bookController.getBooks(req, res));
router.post('/', (req, res) => bookController.createBook(req, res));

module.exports = router;
