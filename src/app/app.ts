import { Component, signal } from '@angular/core';
import { PokemonListComponent } from './pokemon/Components/pokemon-list.components';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [PokemonListComponent]
})
export class AppComponent {
  protected readonly title = signal('pokemon');
}