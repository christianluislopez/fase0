const Book = require('./book.model')

class BookService {
    async getBooks() {
        return await Book.findAll({});
    }

    async createBook(data) {
        const newBook = new Book(data);
        return await newBook.save();
    }
}

module.exports = new BookService();
