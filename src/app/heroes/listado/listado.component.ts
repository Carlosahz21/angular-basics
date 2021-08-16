import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman', 'Hulk', 'IronMan', 'Thor'];
  heroeBorrado: string = '';
  estaActivado: boolean = false;
  
  borrar( nombre: string ) {

    this.heroeBorrado = this.heroes.shift()?.toString() || '';
    console.log( 'Heroe Borrado:', this.heroeBorrado );
    if ( this.heroeBorrado != '' ) {
      this.estaActivado = true;
    } else {
      this.estaActivado = false;
    }
  }

}
