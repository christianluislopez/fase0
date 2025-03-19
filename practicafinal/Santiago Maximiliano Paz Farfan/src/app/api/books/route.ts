import { NextResponse } from "next/server";
import { BookRepository } from "~/server/repositories/book.repository";
import { BookService } from "~/server/services/book.service";

export async function GET() {
  try {
    const bookRepository = new BookRepository();
    const bookService = new BookService(bookRepository);
    
    const books = await bookService.getAllBooks();
    
    return NextResponse.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, author, language, publishDate, editorialEmail, editorialPhone } = body;

    if (!title || !author || !language || !publishDate || !editorialEmail || !editorialPhone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const bookRepository = new BookRepository();
    const bookService = new BookService(bookRepository);
    
    const newBook = await bookService.createBook({
      title,
      author,
      language,
      publishDate,
      editorialEmail,
      editorialPhone
    });
    
    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    console.error("Error creating book:", error);
    return NextResponse.json(
      { error: "Failed to create book" },
      { status: 500 }
    );
  }
} 