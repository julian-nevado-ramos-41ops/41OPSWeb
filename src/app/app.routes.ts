import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'snake',
        loadComponent: () => import('./components/snake-game/snake-game.component').then(m => m.SnakeGameComponent)
    }
];
