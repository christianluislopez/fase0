const BaseService = require("./BaseService");
const Book = require("../models/Book");

class BookService extends BaseService {
  async getAll() {
    return await Book.findAll();
  }

  async create(bookData) {
    return await Book.create(bookData);
  }
}

module.exports = new BookService();
