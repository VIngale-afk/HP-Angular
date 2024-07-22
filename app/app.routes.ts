import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./hpmovies/hpmovies.module').then(m => m.HPMoviesModule)
    }
];
