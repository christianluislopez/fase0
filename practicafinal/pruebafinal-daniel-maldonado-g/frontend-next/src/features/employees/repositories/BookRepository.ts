import { Book } from "../types/Book";

const API_URL = "http://127.0.0.1:5000";

export class BookRepository {
  static async fetchBooks() {
    const response = await fetch(`${API_URL}/api/book`);
    if (!response.ok) throw new Error("Error fetching books");
    return response.json();
  }

  static async createBook(data: Book) {
    const response = await fetch(`${API_URL}/api/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error("There was an error trying to save book")
        return response.json();
  }
}
