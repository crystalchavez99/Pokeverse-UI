import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonListContainerComponent } from "./components/pokemon-list-container/pokemon-list-container.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PokemonListContainerComponent]
})
export class AppComponent {
  title = 'Pokeverse-Angular';
}
