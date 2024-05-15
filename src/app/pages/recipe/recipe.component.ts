import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { propertiesMeals } from '../../models/meals';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  standalone: true,
  imports: [JsonPipe],
})
export class RecipeComponent implements OnInit {
  public recipeServices = inject(RecipesService);
  private route = inject(ActivatedRoute);
  public meals: propertiesMeals[] = [];
  public ingredients: any[] = [];
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.getParamUrl();
  }
  getSafeYouTubeUrl(youtubeUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
  }
  getParamUrl() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.getMealById(id);
      }
    });
  }

  getMealById(id: string) {
    this.recipeServices.getDetailById(id).subscribe(({ meals }) => {
      this.meals = meals;
    });
  }

  getIngredients(meal: any): any[] {
    for (let i = 1; i <= 20; i++) {
      const obj = this.addKeyIngredients(meal, i);
      if (obj.ingredient && obj.ingredient !== '') {
        this.ingredients.push(obj);
      } else {
        break;
      }
    }
    return this.deleteDuplicated();
  }

  addKeyIngredients(meal: { [x: string]: any }, i: string | number) {
    const ingredientKey = 'strIngredient' + i;
    const measureKey = 'strMeasure' + i;

    return {
      ingredient: meal[ingredientKey],
      measure: meal[measureKey],
    };
  }

  deleteDuplicated() {
    const uniqueMap = this.ingredients.reduce((acc, word) => {
      acc[word.ingredient] = word;
      return acc;
    }, {});
    return Object.values(uniqueMap);
  }
}
