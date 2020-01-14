import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PagedData } from 'src/app/models/paged-data.model';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit{

  pagedData: PagedData<Pokemon>;
  limit = 0;

  constructor(private pokemonService:PokemonService) { 
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons(10, 0).subscribe(pagedData => this.pagedData = pagedData);
    this.limit +=10;
  }

  onScroll() {
    this.limit +=10;
    this.pokemonService.getPokemons(this.limit, 0).subscribe(pagedData => this.pagedData = pagedData);
  }

}
