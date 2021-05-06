import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe/heroe.components';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        heroeComponent,
        ListadoComponent
      ],
      exports:[// todo lo que puede verse fuera 
        ListadoComponent
      ],
      imports:[// solo van modulos
        CommonModule//
      ]
})
export class HeroesModule {

}