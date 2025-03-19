import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly _URL = 'http://localhost:5162/movies';
  private http = inject(HttpClient);

  constructor() {}

  post(
    id: number,
    title: string,
    author: string,
    language: string,
    releaseDate: Date,
    editorialEmail: string,
    editorialPhone: string
  ) {
    return this.http.post(`${this._URL}`, {
      id: id,
      title: title,
      author: author,
      language: language,
      releaseDate: releaseDate,
      editorialEmail: editorialEmail,
      editorialPhone: editorialPhone,
    });
  }
}
