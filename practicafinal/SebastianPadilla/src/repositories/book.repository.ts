import prisma from '../config/prisma'
import { Book } from '../models/book.model';
import { IBookRepository } from "./interfaces/book.repository.interface";

export class BookRepository implements IBookRepository {

    async create(book: Book): Promise<Book> {
        const newBook = await prisma.book.create({
            data: {
                author_name: book.authorName,
                editorial_email: book.editorialNumber,
                editorial_number: book.editorialNumber,
                title: book.title,
                language: book.languague,
                datePost: book.datePost
            },
        });
        return new Book(newBook.author_name, newBook.editorial_email, newBook.editorial_number, newBook.title, newBook.language, newBook.datePost, newBook.id, newBook.createdAt);
    }

    async findAll(): Promise<Book[]> {
        const books = await prisma.book.findMany();
        return books.map(book => new Book(book.author_name, book.editorial_email, book.editorial_number, book.title, book.language, book.datePost, book.id, book.createdAt));
    }

}