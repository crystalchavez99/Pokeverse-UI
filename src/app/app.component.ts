import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonListContainerComponent } from "./components/pokemon-list-container/pokemon-list-container.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PokemonListContainerComponent, HomeComponent]
})
export class AppComponent {
  title = 'Pokeverse-Angular';
}
