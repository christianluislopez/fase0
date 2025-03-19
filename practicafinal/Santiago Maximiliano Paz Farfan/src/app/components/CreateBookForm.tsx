'use client';

import { useState } from 'react';
import { CreateBookFormProps } from '../interfaces/IBook';


export default function CreateBookForm({ onBookCreated }: CreateBookFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    language: '',
    publishDate: '',
    editorialEmail: '',
    editorialPhone: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create book');
      }

      setFormData({
        title: '',
        author: '',
        language: '',
        publishDate: '',
        editorialEmail: '',
        editorialPhone: '',
      });
      onBookCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Crear nuevo libro</h2>
      
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="grid gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Titulo
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            pattern="[A-Za-z\s]+"
            title="El titulo debe contener solo letras y espacios"
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Autor
          </label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            pattern="[A-Za-z\s]+"
            title="El autor debe contener solo letras y espacios"
          />
        </div>

        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">
            Idioma
          </label>
          <input
            type="text"
            id="language"
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            pattern="[A-Za-z\s]+"
            title="El idioma debe contener solo letras y espacios"
          />
        </div>

        <div>
          <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700">
            Fecha de publicacion
          </label>
          <input
            type="date"
            id="publishDate"
            value={formData.publishDate}
            onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="editorialEmail" className="block text-sm font-medium text-gray-700">
            Email de la editorial
          </label>
          <input
            type="email"
            id="editorialEmail"
            value={formData.editorialEmail}
            onChange={(e) => setFormData({ ...formData, editorialEmail: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="El email debe ser valido"
          />
        </div>

        <div>
          <label htmlFor="editorialPhone" className="block text-sm font-medium text-gray-700">
            Telefono de la editorial
          </label>
          <input
            type="tel"
            id="editorialPhone"
            value={formData.editorialPhone}
            onChange={(e) => setFormData({ ...formData, editorialPhone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            pattern="\d{7,8}"
            title="El numero de telefono debe contener 7 o 8 digitos"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Creando...' : 'Crear libro'}
        </button>
      </div>
    </form>
  );
} 