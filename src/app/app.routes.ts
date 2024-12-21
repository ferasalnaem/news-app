import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategorizedNewsComponent } from './components/categorized-news/categorized-news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Main page for uncategorized news
  { path: 'categorized-news', component: CategorizedNewsComponent }, // Categorized news page
];
