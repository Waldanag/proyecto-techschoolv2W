import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex.model';
import { ModalPokeComponent } from '../modal-poke/modal-poke.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-poke',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-poke.component.html',
  styleUrl: './card-poke.component.css'
})
export class CardPokeComponent {
  @Input() public data:null | Pokemon = null;
}
