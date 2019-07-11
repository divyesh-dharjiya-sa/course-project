import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediant } from '../shopping-list/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
   count: number = 0;
   recipeChanged = new Subject<Recipe[]>();
   private recipes: Recipe[] = [];
    // new Recipe(
    //   'Dal Fry' ,
    //   'I don’t like the regular pressure cooker with turmeric and salt only yellow dal. I want mine to have bold flavors, ' ,
    //   'https://myfoodstory.com/wp-content/uploads/2016/03/dhaba-style-dal-fry-recipe.1024x1024-2.jpg',
    //    [new Ingrediant('Meat' , 20)]
    // ),
    // new Recipe(
    //   'Baingan Bharta',
    //   'I’m a massive baingan bharta snob because there is nothing appetising about pulpy eggplant or baingan. ',
    //   'https://myfoodstory.com/wp-content/uploads/2017/11/Easy-Baingan-Bharta-Smoky-eggplant-stir-fry-1.jpg' ,
    //   [new Ingrediant('Burger' , 30)])
  // ];
  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngridiantToShoppingList(ingridiants: Ingrediant[]){
          this.shoppingListService.addIngrediants(ingridiants);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number , newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number){
    this.recipes.splice(index , 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
