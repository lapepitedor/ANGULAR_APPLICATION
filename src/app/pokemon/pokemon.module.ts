import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';

const pokemonroutes: Routes = [
  {
    path: "pokemons",
    component: ListPokemonComponent,
  },
  {
    // ANGULAR LI LES ROUTES DE HAUT EN BAS
    path: "pokemons/:id",
    component: DetailPokemonComponent,
  }
  
];


@NgModule({
  declarations: [// ELEMENT A DECLARER SLM O NIVEAU POKEMON ET NON DS L DOSSIER POKEMON
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonroutes)


  ]
})
export class PokemonModule { }
