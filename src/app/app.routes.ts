import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Main page for uncategorized news
  { path: '**', redirectTo: '' }, // Fallback to the main page for unknown routes
];
