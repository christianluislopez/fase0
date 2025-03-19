export interface Book {
    id: number;
    title: string;
    author: string;
    language: string;
    publishDate: string;
    editorialEmail: string;
    editorialPhone: string;
    createdAt: string;
    updatedAt: string | null;
  }

  export interface CreateBookFormProps {
    onBookCreated: () => void;
  }