
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
      pagina: ['', [Validators.required, Validators.pattern(/^\d{0-9}$/)]],
      dataInicio: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: Book = this.bookForm.value;
      this.bookService.addBook(newBook);
      this.bookForm.reset();
    }
  }
}
