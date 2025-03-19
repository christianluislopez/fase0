import { Book } from "../models/book.model";
import { BookRepository } from "../repositories/book.repository";

export class BookService {
    private bookRepository: BookRepository;

    constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
    }

    async create(author_name: string, editorial_email: string, editorial_number: string, title: string, languague: string, datePost: string): Promise<Book> {
        const newBook = new Book(author_name, editorial_email, editorial_number, title, languague, datePost);
        return this.bookRepository.create(newBook);
    }

    async getAll(): Promise<Book[]> {
        return this.bookRepository.findAll();
    }
}