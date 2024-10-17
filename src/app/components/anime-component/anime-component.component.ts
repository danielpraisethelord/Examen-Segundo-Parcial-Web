import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anime-component',
  standalone: true,
  imports: [],
  templateUrl: './anime-component.component.html',
  styleUrl: './anime-component.component.css'
})
export class AnimeComponentComponent {
  @Input() anime: any;
}
