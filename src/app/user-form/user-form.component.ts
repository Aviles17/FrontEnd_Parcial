import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  titulo!: string;
  referecncia!: string;
  autor!: string;
  precio!: number;
  ubicacion!: String

  result: any;

  constructor(private http: HttpClient) {
  }

  onSubmit() {
    const data = {
      titulo: this.titulo,
      referecncia: this.referecncia,
      autor: this.autor,
      precio: this.precio,
      ubicacion: this.ubicacion
    };
  }
}
