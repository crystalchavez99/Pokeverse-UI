import { Component, Input } from '@angular/core';
import { Pokemon } from './types/pokemon';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemonEntry: any;

  data: any;
  pokemon: Pokemon | undefined;

  constructor(private apiService: PokemonApiService) {}
  ngOnInit(): void {
    if(this.pokemonEntry){
      this.apiService.getPokemon(this?.pokemonEntry?.url).subscribe(
        response =>{
          this.data = response;
          this.pokemon = {id:this.data.id,name: this.data.name, sprite: this.data.sprites['front_default'], types: this.data.types, weight: this.data.weight, height: this.data.height}
          console.log(`pokemon`, this.data)
        }
      )
    }
  }
}
