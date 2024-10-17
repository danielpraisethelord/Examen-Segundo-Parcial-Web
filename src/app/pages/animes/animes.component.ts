import { Component, inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { AnimeComponentComponent } from "../../components/anime-component/anime-component.component";

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [AnimeComponentComponent],
  templateUrl: './animes.component.html',
  styleUrl: './animes.component.css'
})
export class AnimesComponent {
  private _service  = inject(ServiceService);
  animes: any[] = [];
  constructor() {
    this._service.getTopAnimes().subscribe((data: any) => {
        this.animes = data.data;
      }
    )
  }
}
