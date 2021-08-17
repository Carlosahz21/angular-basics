import { Injectable } from '@angular/core';
import { Personaje } from '../main-page/interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder:  15000000
    },
    {
      nombre: 'Vegeta',
      poder: 1000000
    },
    {
      nombre: 'Tunks',
      poder: 100000
    },
    {
      nombre: 'Pikoro',
      poder: 50000
    }
  ]

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { 
    console.log( 'Servicio Inicializado' );
  }

  agregarPersonaje( personaje: Personaje) {
    this._personajes.push( personaje );
  }

}
