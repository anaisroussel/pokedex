import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PokedexComponent } from '../pokedex/pokedex.component';


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports : [
    PokedexComponent
  ]
})
export class PokemonsModule { }
