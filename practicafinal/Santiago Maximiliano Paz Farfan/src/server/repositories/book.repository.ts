import { db } from "../db";
import { books } from "../db/schema";

export interface IBookRepository {
  getAll(): Promise<typeof books.$inferSelect[]>;
  create(data: {
    title: string;
    author: string;
    language: string;
    publishDate: string;
    editorialEmail: string;
    editorialPhone: string;
  }): Promise<typeof books.$inferSelect>;
}

export class BookRepository implements IBookRepository {
  async getAll(): Promise<typeof books.$inferSelect[]> {
    return await db.select().from(books);
  }

  async create(data: {
    title: string;
    author: string;
    language: string;
    publishDate: string;
    editorialEmail: string;
    editorialPhone: string;
  }): Promise<typeof books.$inferSelect> {
    return await db.insert(books).values(data).returning().get();
  }
} 