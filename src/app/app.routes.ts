import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Riconoscimenti } from './riconoscimenti';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'riconoscimenti', component: Riconoscimenti},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];