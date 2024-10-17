import { Component, inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { PersonajeComponentComponent } from "../../components/personaje-component/personaje-component.component";

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [PersonajeComponentComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  private _service = inject(ServiceService);
  personajes: any[] = [];
  constructor() {
    this._service.getTopCharacters().subscribe((data: any) => {
        this.personajes = data.data;
      }
    )
  }
}