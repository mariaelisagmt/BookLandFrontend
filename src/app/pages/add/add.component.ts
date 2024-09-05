
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-status',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      paginas: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: Book = this.bookForm.value;
      this.bookService.addBook(newBook).subscribe(response => {
        console.log('Book added successfully', response);
        this.bookForm.reset();
      }, error => {
        console.error('Error adding book', error);
      });
    }
  }
}
