import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personaje-component',
  standalone: true,
  imports: [],
  templateUrl: './personaje-component.component.html',
  styleUrl: './personaje-component.component.css'
})
export class PersonajeComponentComponent {
  @Input() personaje: any;
}
