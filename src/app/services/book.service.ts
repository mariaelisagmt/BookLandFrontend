// src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private URL = 'https://localhost:7135/Livro';

  constructor(private http: HttpClient) {}

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.URL, book);
  }

  getBooks(): Observable<any> {
    let x = this.http.get(this.URL);
    console.log(x);
    return x;
  }  

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
}