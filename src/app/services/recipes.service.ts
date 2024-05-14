import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environment/environment';
import { Categories } from '../models/categories';
import { Meals } from '../models/meals';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private http = inject(HttpClient);

  private categoriesUrl = `${environment.urlBase}categories.php`;
  private filterCategoryUrl = `${environment.urlBase}filter.php`;
  private filterNameUrl = `${environment.urlBase}search.php`;
  private filterFirstLetterUrl = `${environment.urlBase}search.php`;
  private detailIdUrl = `${environment.urlBase}lookup.php`;

  public getCategories(): Observable<Categories> {
    return this.http
      .get<Categories>(this.categoriesUrl)
      .pipe(this.handleError());
  }

  public filterByCategory(idCategory: string): Observable<Meals> {
    const params = new HttpParams().set('c', idCategory);
    return this.http
      .get<Meals>(this.filterCategoryUrl, { params })
      .pipe(this.handleError());
  }

  public filterByName(name: string) {
    const params = new HttpParams().set('s', name);
    return this.http
      .get<Meals>(this.filterNameUrl, { params })
      .pipe(this.handleError());
  }

  public filterByFirstLetter(letter: string) {
    const params = new HttpParams().set('f', letter);
    return this.http
      .get<Meals>(this.filterFirstLetterUrl, { params })
      .pipe(this.handleError());
  }

  public getDetailById(id: string) {
    const params = new HttpParams().set('i', id);
    return this.http
      .get<Meals>(this.detailIdUrl, { params })
      .pipe(this.handleError());
  }

  private handleError<T>() {
    return catchError<T, Observable<T>>((error: any) => {
      return throwError(() => error);
    });
  }
}
