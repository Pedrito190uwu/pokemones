import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonComponent } from './pokemon/Components/pokemon-components';
import { HttpClientModule } from '@angular/common/http';

imports: [
  BrowserModule,
  HttpClientModule
]
@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [PokemonComponent]
})
export class AppModule { }