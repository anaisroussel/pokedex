import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemons/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  id : number;
  pokemon : Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  fetchId(idPokemon: number) {
    this.id = idPokemon;
  }

}
