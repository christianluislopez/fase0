import { BookRepository } from "../repositories/BookRepository";
import { Book } from "../types/Book";
export class BookService {
    static async getBooks(): Promise<Book[]> {
        try {
            const books = await BookRepository.fetchBooks();
            return books.map((book: Book) => ({
                id: book.id,
                title: book.title,
                author: book.author,
                language: book.language,
                date: book.date,
                email: book.email,
                cellphone: book.cellphone
            }));
        } catch (error) {
            console.log('Failed to obtain book');
            throw new Error('Resource not found');
        }
    }
}
