import { Router, Request, Response } from "express";
import { BookController } from "../controllers/book.controller";
import { BookService } from "../services/book.service";
import { BookRepository } from "../repositories/book.repository";

const router = Router();
const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

router.post("/books", bookController.create.bind(bookController));
router.get("/books", bookController.getAll.bind(bookController));

export default router;