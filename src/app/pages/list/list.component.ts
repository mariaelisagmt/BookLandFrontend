import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }
  
  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }
  onBookDeleted(): void {
    this.loadBooks(); // Recarregue a lista após a exclusão
  }
}