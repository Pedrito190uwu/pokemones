import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonService } from '../services/pokemon-services';
import { Pokemon } from '../models/pokemon-models';
@Component({
  selector: 'app-pokemon-list',
  standalone: true,
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

    this.pokemonService.getPokemons().subscribe(response => {

      const peticiones = response.results.map(pokemon =>
        this.pokemonService.getPokemonDetail(pokemon.url)
      );

      forkJoin(peticiones).subscribe((detalles: any[]) => {

        this.pokemons = detalles.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other['official-artwork'].front_default,
          height: pokemon.height,
          weight: pokemon.weight,
          types: pokemon.types.map((t: any) => t.type.name)
        }));

      });

    });

  }

}