import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { 
  PokemonListResponse, 
  PokemonDetail, 
  Pokemon 
} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  obtenerPokemones(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=${limit}&offset=${offset}`)
      .pipe(
        switchMap((response: PokemonListResponse) => {
          const urls = response.results.map(pokemon => pokemon.url);
          const detailRequests = urls.map(url =>
            this.http.get<PokemonDetail>(url)
          );
          return forkJoin(detailRequests);
        }),
        
        map((details: PokemonDetail[]) => {
          return details.map(detail => ({
            id: detail.id,
            name: detail.name,
            image: detail.sprites.other['official-artwork'].front_default,
            height: detail.height / 10,
            weight: detail.weight / 10,
            experience: detail.base_experience,
            types: detail.types.map(t => t.type.name),
            stats: detail.stats.map(s => ({
              name: s.stat.name,
              value: s.base_stat
            }))
          }));
        }),
        
        catchError((error) => {
          console.error('Error en servicio:', error);
          return throwError(() => new Error('Error al cargar los Pokémon. Por favor, intenta de nuevo.'));
        })
      );
  }
}