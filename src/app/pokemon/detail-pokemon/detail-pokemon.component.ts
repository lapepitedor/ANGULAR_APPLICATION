import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute , private router:Router) {}
  //import du routeur
  ngOnInit() {
    this.pokemonList = POKEMONS;
    pokemon: Pokemon;
    const pokemonId = this.route.snapshot.paramMap.get("id");

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
