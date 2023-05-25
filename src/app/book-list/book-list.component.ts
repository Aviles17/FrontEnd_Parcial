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

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/GetLibro')
      .subscribe((response: any[]) => {
        try {
          this.books = response.map((bookData: any) => {
            return {
              titulo: bookData.titulo,
              referencia: bookData.referencia,
              autor: bookData.autor,
              precio: bookData.precio,
              ubicacion: bookData.ubicacion
            };
          });
          console.log(this.books);
        } catch (error) {
          console.error('Error parsing the response:', error);
        }
      });
  }
}

