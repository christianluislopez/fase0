const BookService = require("../services/BookService");

class BookController {
  async getBooks(req, res) {
    try {
      const books = await BookService.getAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createBook(req, res) {
    try {
      const book = await BookService.create(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new BookController();
