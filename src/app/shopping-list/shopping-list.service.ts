import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediant } from './ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingrediantsChanged = new EventEmitter<Ingrediant[]>();

  private ingrediants: Ingrediant[] = [
    new Ingrediant('Apple' , 5),
    new Ingrediant('Banana',12)
  ];

  constructor() { 

  }

  getIngrediant(){
    return this.ingrediants.slice();
  }

  addIngrediant(ingrediant: Ingrediant){
    this.ingrediants.push(ingrediant);
    this.ingrediantsChanged.emit(this.ingrediants.slice());
  }

  addIngrediants(ingrediants: Ingrediant[]){
    this.ingrediants.push(...ingrediants);
    this.ingrediantsChanged.emit(this.ingrediants.slice());
  }
}
