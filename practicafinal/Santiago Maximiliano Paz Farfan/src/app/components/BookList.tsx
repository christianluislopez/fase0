'use client';

import { useEffect, useState } from 'react';
import CreateBookForm from './CreateBookForm';
import { Book } from '../interfaces/IBook';


export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <CreateBookForm onBookCreated={fetchBooks} />
      
      <h1 className="text-2xl font-bold mb-4">Libros</h1>
      <div className="grid gap-4">
        {books.map((book, index) => (
          <table key={book.id} className="border-collapse border border-gray-300">
            <tbody>
              <tr className={index % 2 === 0 ? 'bg-blue-100' : 'bg-pink-100'}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{book.title}</td>
                <td className="border border-gray-300 p-2">{book.author}</td>
                <td className="border border-gray-300 p-2">{book.language}</td>
                <td className="border border-gray-300 p-2">{book.editorialEmail}</td>
                <td className="border border-gray-300 p-2">{book.editorialPhone}</td>
              </tr> 
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
} 