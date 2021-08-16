import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = 'Iron Man';
  edad: number = 30;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerDatos(): string {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}`; 
  }

  cambiarNombre(): void {
    if (this.nombre == 'Iron Man') {
      this.nombre = 'Spiderman';
    } else {
      this.nombre = 'Iron Man'
    }
  }

  cambiarEdad(): void {
    this.edad = 25;
  }
}
