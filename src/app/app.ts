import { Component, signal } from '@angular/core';
import { PokemonListComponent } from './pokemon/Components/pokemon-list.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  protected readonly title = signal('pokemon');
}