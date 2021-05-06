import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['spiderman','iroman', 'Hulk', 'Thor', 'Cap. America'];
  heroeBorrado: string ='';
  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift()||'';
  }
}
