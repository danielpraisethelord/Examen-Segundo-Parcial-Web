import { Routes } from '@angular/router';
import { AnimesComponent } from './pages/animes/animes.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';

export const routes: Routes = [
    {
        path: 'animes',
        component: AnimesComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: '**',
        redirectTo: '/animes',
        pathMatch: 'full'
    }
];
