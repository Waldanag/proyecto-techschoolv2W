import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPokeComponent } from './components/card-poke/card-poke.component';
import { ModalPokeComponent } from './components/modal-poke/modal-poke.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FailPokeComponent } from './components/fail-poke/fail-poke.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeaderComponent, CardPokeComponent, ModalPokeComponent, LoaderComponent, FailPokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-techschoolv2W';
}
