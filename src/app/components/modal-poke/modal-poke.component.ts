import { Component, Input } from '@angular/core';
import { PokemonAbilities } from '../../models/pokedex.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal-poke',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './modal-poke.component.html',
  styleUrl: './modal-poke.component.css'
})
export class ModalPokeComponent {
  @Input() public data: undefined | PokemonAbilities[] = [];
};
