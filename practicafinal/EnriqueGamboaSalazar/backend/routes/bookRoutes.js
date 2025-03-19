const express = require("express");
const BookController = require("../controllers/BookController");

const router = express.Router();

router.get("/books", BookController.getBooks);
router.post("/books", BookController.createBook);

module.exports = router;
