import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service'; 

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book | undefined;  
  @Output() bookDeleted = new EventEmitter<void>();

  constructor(private bookService: BookService) { }

  deleteBook(): void {
    if (this.book) {
      this.bookService.deleteBook(this.book.id).subscribe({
        next: () => {
          this.bookDeleted.emit();
          console.log('Book deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting book:', error);
        }
      });
    }
  }
}
