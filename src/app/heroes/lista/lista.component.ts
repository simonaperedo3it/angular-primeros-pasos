import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Deadpool'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
