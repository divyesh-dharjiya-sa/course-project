import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediant } from '../shopping-list/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Dal Fry' ,
      'I don’t like the regular pressure cooker with turmeric and salt only yellow dal. I want mine to have bold flavors, ' ,
      'https://myfoodstory.com/wp-content/uploads/2016/03/dhaba-style-dal-fry-recipe.1024x1024-2.jpg',
       [new Ingrediant('Meat' , 20)]
    ),
    new Recipe(
      'Baingan Bharta',
      'I’m a massive baingan bharta snob because there is nothing appetising about pulpy eggplant or baingan. ',
      'https://myfoodstory.com/wp-content/uploads/2017/11/Easy-Baingan-Bharta-Smoky-eggplant-stir-fry-1.jpg' ,
      [new Ingrediant('Burger' , 30)])
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngridiantToShoppingList(ingridiants: Ingrediant[]){
          this.shoppingListService.addIngrediants(ingridiants);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

}
