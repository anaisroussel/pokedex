import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(pokemons: any, searchText: any): any {
        if(searchText == null) return pokemons;

        return pokemons.filter(function(pokemon){
          return pokemon.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
      }
}