import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fail-poke',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fail-poke.component.html',
  styleUrl: './fail-poke.component.css'
})
export class FailPokeComponent {
  public title: string = 'No pokémon found.';
}
