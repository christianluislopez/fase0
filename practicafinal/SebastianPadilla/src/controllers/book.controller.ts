import { Request, Response } from "express";
import { BookService } from "../services/book.service";

export class BookController {
    private bookService: BookService;

    constructor(bookService: BookService) {
        this.bookService = bookService;
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { author_name, editorial_email, editorial_number, title, language, datePost } = req.body;
            console.log(req.body);
            const book = await this.bookService.create(author_name, editorial_email, editorial_number, title, language, datePost);
            return res.status(201).json({ success: true, data: book });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const books = await this.bookService.getAll();
            return res.status(200).json({ success: true, data: books });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
}
