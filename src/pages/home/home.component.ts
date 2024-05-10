import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardRecipesComponent } from '../../components/card-recipes/card-recipes.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NotResultsComponent } from '../../components/not-results/not-results.component';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CardRecipesComponent,
    NotResultsComponent,
  ],
})
export class HomeComponent implements OnInit {
  public selectedCategory!: string;
  public isCategorySelected!: string;

  public signal = inject(SignalsService);

  ngOnInit() {}

  getSelectedCategory(recipes: string) {
    this.isCategorySelected = recipes;
  }
}
