import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.'
})
export class App {
  protected readonly title = signal('pokemon');
}
