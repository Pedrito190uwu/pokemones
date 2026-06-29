import { Component } from '@angular/core';
import { PokemonListComponent } from './pokemon/Components/pokemon-list.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonListComponent],
  template: `<app-pokemon-list></app-pokemon-list>`
})
export class AppComponent {}