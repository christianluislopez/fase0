import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";


export const createTable = sqliteTableCreator((name) => `pruebafinal-app_${name}`);

export const books = createTable(
  "book",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    title: text("title", { length: 256 }).notNull(),
    author: text("author", { length: 256 }).notNull(),
    language: text("language", { length: 100 }).notNull(),
    publishDate: text("publish_date").notNull(),
    editorialEmail: text("editorial_email", { length: 256 }).notNull(),
    editorialPhone: text("editorial_phone", { length: 20 }).notNull(),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    ),
  },
  (table) => ({
    titleIndex: index("title_idx").on(table.title),
    authorIndex: index("author_idx").on(table.author),
  })
);
