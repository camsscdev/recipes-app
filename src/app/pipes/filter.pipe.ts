import { Pipe, PipeTransform, inject } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { SignalsService } from '../services/signals.service';

@Pipe({
  name: 'filterByFirstLetter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  private recipesService = inject(RecipesService);
  private signalService = inject(SignalsService);

  transform(value: any, args?: any): any {
    if (value) {
      this.recipesService.filterByFirstLetter(value).subscribe(({ meals }) => {
        this.signalService.recipesFilter.set(meals);
      });
    } else {
      alert('No hay nada');
      this.signalService.category.set('all');
    }
  }
}
