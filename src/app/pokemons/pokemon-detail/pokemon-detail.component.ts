import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon;
  
  constructor(private route: ActivatedRoute, private location: Location, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(myPokemon => this.pokemon = myPokemon);
  }

  goBack() {
    this.location.back();
  }

  playAudio() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.playAudio(id);
  }

}
