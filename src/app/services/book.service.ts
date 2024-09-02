// src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  constructor() {}

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBooks(): Book[] {
    return this.books;
  }
}