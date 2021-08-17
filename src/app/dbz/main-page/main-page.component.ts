import { Component, OnInit } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Krilin',
    poder: 7000
  }

  // agregarNuevoPersonaje( argumento: Personaje ) {
  //   console.log( argumento );
  //   this.personajes.push( argumento );

  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0 
  //   }

  // }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  constructor(
    private dbzService: DbzService ) {}
}
