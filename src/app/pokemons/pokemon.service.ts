import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { PagedData } from '../models/paged-data.model';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'; 

const pokemonsUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pagedData: PagedData<Pokemon>;

  constructor(private client : HttpClient) { }

  getPokemons(limit,offset) : Observable<PagedData<Pokemon>> {
    const params = new HttpParams().set('limit',limit).set('offset',offset);
    return this.client.get<PagedData<Pokemon>>(pokemonsUrl, {params}).pipe( 
      tap(_ => console.log('fetched pokemons')),
      catchError(this.handleError<PagedData<Pokemon>>('getPokemons'
      )));;
  }

  getPokemon(id:number): Observable<Pokemon>{
    const pokemonUrl = pokemonsUrl+'/'+id;
    return this.client.get<Pokemon>(pokemonUrl).pipe( 
      tap(_ => console.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>('getPokemon'
      )));;
  }

  search(value:string) : Observable<PagedData<Pokemon>>{
    const url = pokemonsUrl+'?search='+value;
    return this.client.get<PagedData<Pokemon>>(url).pipe( 
      tap(_ => console.log(`serach =${value}`)),
      catchError(this.handleError<PagedData<Pokemon>>('search'
      )));;

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
     console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  playAudio(id:number) {
    let audio = new Audio();
    audio.src = "../../assets/audio/"+id+".mp3";
    audio.load();
    audio.play();
  }

}
