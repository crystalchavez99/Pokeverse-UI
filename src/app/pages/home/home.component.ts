import { Component } from '@angular/core';
import { PokemonListContainerComponent } from "../../components/pokemon-list-container/pokemon-list-container.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PokemonListContainerComponent]
})
export class HomeComponent {

}
