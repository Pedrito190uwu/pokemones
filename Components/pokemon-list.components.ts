import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

import { PokemonService } from '../services/pokemon-services';

import {
  Pokemon,
  PokemonBasic,
  PokemonListResponse
} from '../models/pokemon-models';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.components.html',
  styleUrls: ['./pokemon-list.components.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.cargarPokemones();
  }

  cargarPokemones(): void {

    this.pokemonService
      .getPokemons()
      .subscribe((response: PokemonListResponse) => {

        const peticiones = response.results.map(
          (pokemon: PokemonBasic) =>
            this.pokemonService.getPokemonDetail(pokemon.url)
        );

        forkJoin(peticiones).subscribe((detalles: Pokemon[]) => {

          this.pokemons = detalles;

        });

      });

  }
}