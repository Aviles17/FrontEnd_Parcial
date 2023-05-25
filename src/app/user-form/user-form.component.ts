import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  title: string = '';
  reference: string = '';
  author: string = '';
  price: number = 0.0;
  location: string = '';

  constructor(private http: HttpClient) { }

  submitForm() {
    const book = {
      title: this.title,
      reference: this.reference,
      author: this.author,
      price: this.price,
      location: this.location
    };

    this.http.post(`http://localhost:8080/Add/Libro?titulo=${this.title}&referencia=${this.reference}&autor=${this.author}&precio=${this.price}&ubicacion=${this.location}`, book)
      .subscribe(response => {
        console.log(response);
        // Handle the response or update the component's properties
      });
  }
}
