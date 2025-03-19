"use client";
import { useEffect, useState } from "react";
import { BookService } from "../services/BookService";
import { Book } from "../types/Book";
import { useFormState } from "react-dom";

export default function BookPage() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    async function obtainBooks() {
      const bookData = await BookService.getBooks();
      setBooks([...bookData]);
    }
    obtainBooks();
  }, []);

  const saveUser = () => {};

  return (
    <main>
      <h1>Registro de Libros</h1>
      <div className="flex flex-col">
        <form className="mb-3 size-2/4" method="post">
          <div className="flex flex-col">
            <label>Titulo</label>
            <input type="text" name="title"  required />
          </div>
          <div className="flex flex-col">
            <label>Autor</label>
            <input type="text" name="author" required />
          </div>
          <div className="flex flex-col">
            <label>Idioma</label>
            <input type="text" name="language" required />
          </div>
          <div className="flex flex-col">
            <label>Fecha P</label>
            <input type="date" name="date" required/>
          </div>
          <div className="flex flex-col">
            <label>Correo</label>
            <input type="email" name="email" required/>
          </div>
          <div className="flex flex-col">
            <label>Celular de la editorial</label>
            <input type="number" name="cellphone" required/>
          </div>
          <input className="bg-gray-400 mt-1.5" type="submit" value={"Agregar libro"} />
        </form>
        <table>
          <thead className="border-1">
            <tr>
              <th>Nro</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Idioma</th>
              <th>Fecha P.</th>
              <th>Correo</th>
              <th>Celular de la editorial</th>
            </tr>
          </thead>
          <tbody className="border-1">
            {books.map((bookElement, index) => (
              <tr
                className={index % 2 == 0 ? "bg-blue-400" : "bg-red-400"}
                key={bookElement.id}
              >
                <td> {index} </td>
                <td> {bookElement.title} </td>
                <td> {bookElement.author} </td>
                <td> {bookElement.language} </td>
                <td> {bookElement.date} </td>
                <td> {bookElement.email} </td>
                <td> {bookElement.cellphone} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
