import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { RecipeComponent } from '../pages/recipe/recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recipe-details/:id', component: RecipeComponent },
];
