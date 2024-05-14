import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { propertiesMeals } from '../../models/meals';
import { FilterPipe } from '../../pipes/filter.pipe';
import { RecipesService } from '../../services/recipes.service';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-card-recipes',
  templateUrl: './card-recipes.component.html',
  styleUrls: ['./card-recipes.component.scss'],
  standalone: true,
  imports: [CommonModule, FilterPipe],
})
export class CardRecipesComponent implements OnInit, OnChanges {
  @Input() categorySelected!: string | any;
  @Input() filterLetter!: string | any;

  private recipesService = inject(RecipesService);
  public signals = inject(SignalsService);
  public router = inject(Router);

  public current!: string;
  public recipes: propertiesMeals[] = [];

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['categorySelected'] &&
      changes['categorySelected'].currentValue
    ) {
      this.recipesService
        .filterByCategory(this.signals.category())
        .subscribe(({ meals }) => (this.recipes = meals));
    }
    if (changes['filterLetter'] && changes['filterLetter'].currentValue) {
      this.recipes = changes['filterLetter'].currentValue;
    }
  }

  viewRecipe(id: string) {
    this.router.navigate(['recipe-details/', id]);
  }
}
