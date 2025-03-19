import { Book } from "../../models/book.model";

export interface IBookRepository {
  create(book: Book): Promise<Book>;
  findAll(): Promise<Book[]>;
}