import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { propertiesCategories } from '../../models/categories';
import { FilterPipe } from '../../pipes/filter.pipe';
import { RecipesService } from '../../services/recipes.service';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FilterPipe,
    RouterModule,
  ],
})
export class NavbarComponent implements OnInit {
  private recipesService = inject(RecipesService);
  public signalService = inject(SignalsService);
  public router = inject(Router);

  public categories: propertiesCategories[] = [];
  public selectedCategory: string = 'Dessert';
  public nameRecipe: string = '';

  ngOnInit() {
    this.getCategories();
  }

  public getCategories() {
    this.recipesService.getCategories().subscribe(({ categories }) => {
      this.categories = categories;
    });
  }

  public filterBycategory({ value }: any) {
    this.signalService.isviewRecipes.set(true);
    this.redirect();
    this.signalService.category.set(value);
  }

  public filterLetter({ value }: any) {
    this.redirect();
    if (value.length === 1) {
      this.recipesService.filterByFirstLetter(value).subscribe(({ meals }) => {
        meals
          ? this.signalService.recipesFilter.set(meals)
          : this.signalService.isviewRecipes.set(false);
      });
    }
    if (!value) {
      this.redirect();
      this.signalService.isviewRecipes.set(true);
    }
  }

  searchByName() {
    this.recipesService.filterByName(this.nameRecipe).subscribe(({ meals }) => {
      if (meals === null) {
        this.signalService.isviewRecipes.set(false);
        this.redirect();
      }
    });
  }
  redirect() {
    this.router.navigate(['home']);
  }
}
