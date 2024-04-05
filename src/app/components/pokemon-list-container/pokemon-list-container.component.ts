import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
    selector: 'app-pokemon-list-container',
    standalone: true,
    templateUrl: './pokemon-list-container.component.html',
    styleUrl: './pokemon-list-container.component.css',
    imports: [CommonModule, PokemonCardComponent]
})
export class PokemonListContainerComponent implements OnInit{
  data: any;
  pokedex: [] = [];

  constructor(private apiService: PokemonApiService){}
  
  ngOnInit(): void {
    this.apiService.getPokedexList().subscribe(
      response =>{
        this.data = response;
        this.pokedex = this.data.results;
      }
    )
  }
}
