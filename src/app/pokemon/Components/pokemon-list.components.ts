import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon-models';
import { PokemonService } from '../services/pokemon-services';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-components.html',
  styleUrls: ['./pokemon-components.scss']
})
export class PokemonComponent implements OnInit {

  pokemones: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.obtenerPokemones()
      .subscribe(data => {
        this.pokemones = data.results;
      });
  }
}