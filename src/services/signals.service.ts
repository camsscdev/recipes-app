import { Injectable, signal } from '@angular/core';
import { propertiesMeals } from '../models/meals';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  public category = signal('Dessert');

  public recipesFilter = signal<propertiesMeals[]>([]);
  public isviewRecipes = signal(true);
  public isLoading = signal(true);
}
