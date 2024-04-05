import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { 

  }

  getPokedexList(): Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
  }

  getPokemon(url: string): Observable<any>{
    return this.http.get<any>(url);
  }
}
