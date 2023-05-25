import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from "../model/Book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Book[]>('http://localhost:8080/GetLibro')
      .subscribe((response: Book[]) => {
        this.books = response;
      });
  }
}

