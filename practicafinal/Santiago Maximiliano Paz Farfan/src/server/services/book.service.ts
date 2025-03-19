import { IBookRepository } from "../repositories/book.repository";

export interface IBookService {
  getAllBooks(): Promise<typeof import("../db/schema").books.$inferSelect[]>;
  createBook(data: {
    title: string;
    author: string;
    language: string;
    publishDate: string;
    editorialEmail: string;
    editorialPhone: string;
  }): Promise<typeof import("../db/schema").books.$inferSelect>;
}

export class BookService implements IBookService {
  constructor(private readonly bookRepository: IBookRepository) {}

  async getAllBooks(): Promise<typeof import("../db/schema").books.$inferSelect[]> {
    return await this.bookRepository.getAll();
  }

  async createBook(data: {
    title: string;
    author: string;
    language: string;
    publishDate: string;
    editorialEmail: string;
    editorialPhone: string;
  }): Promise<typeof import("../db/schema").books.$inferSelect> {
    return await this.bookRepository.create(data);
  }
} 