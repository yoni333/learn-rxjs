import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { Book } from '../add-book/add-book.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList$ :Observable<Book[]>
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookList$ = this.bookService.getList()
  }

}
