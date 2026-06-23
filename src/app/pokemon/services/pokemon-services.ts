import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon-models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(this.apiUrl);
  }

  getPokemonDetail(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}