const bookService = require('./book.service');

class BookController {
    async getBooks(req, res) {
        try {
            const books = await bookService.getBooks();
            res.json(books);
        } catch (error) {
            res.status(500).json({ error: 'Failed to obtain resources' });
        }
    }

    async createBook(req, res) {
        try {
            const newBook = await bookService.createBook(req.body);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create record' });
        }
    }
}

module.exports = new BookController();
