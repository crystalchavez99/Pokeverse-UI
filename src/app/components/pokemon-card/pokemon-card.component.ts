import { Component, Input } from '@angular/core';
import { Pokemon } from './types/pokemon';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon | undefined;

  data: any;

  constructor(private apiService: PokemonApiService) {}
  ngOnInit(): void {
    if(this.pokemon){
      this.apiService.getPokemon(this?.pokemon?.url).subscribe(
        response =>{
          this.data = response;
          console.log(`poke`,this.data)
          let sprite = this.data.sprites['front_default'];
          this?.pokemon?.sprite  = sprite;
        }
      )
    }
  }
}
