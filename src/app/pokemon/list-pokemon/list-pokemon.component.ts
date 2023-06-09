import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent  {
  pokemonList: Pokemon[];

  constructor(private router: Router,
  private pokemonService: PokemonService) {
    
  }

  ngOnInit() {
    this.pokemonList = this.PokemonService.getPokemonList()
  }

  goToPokemon(pokemon: Pokemon) { 
    this.router.navigate(["/pokemons", pokemon.id]);
  }
}
