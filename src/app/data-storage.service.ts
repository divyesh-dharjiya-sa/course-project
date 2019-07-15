import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { RecipeService } from './recipes/recipe.service';
import { Recipe } from './recipes/recipe.model';
import { map, tap, take, exhaust, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient , private recipeService: RecipeService ,private authService: AuthService) { }

  storeRecipe(){
    const recipe = this.recipeService.getRecipes();
    return this.http.put('https://course-project-95fe8.firebaseio.com/recipe.json' , recipe).subscribe((response) => {
              console.log(response);
    });
  }

  fetchRecipes() {
      return this.authService.user.pipe(take(1), exhaustMap(user => {
        return this.http
        .get<Recipe[]>(
          'https://course-project-95fe8.firebaseio.com/recipe.json'
         , {params: new HttpParams().set('auth' , user.token)})
      }) , map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingrediant ? recipe.ingrediant : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      }));
  }
}
