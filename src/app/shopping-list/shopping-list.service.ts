import { Injectable, ViewChild } from '@angular/core';
import { Ingrediant } from './ingrediant.model';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingrediantsChanged = new Subject<Ingrediant[]>();
  startedEditing = new Subject<number>();
  private ingrediants: Ingrediant[] = [
    new Ingrediant('Apple' , 5),
    new Ingrediant('Banana',12)
  ];

  constructor() { 

  }

  getIngrediants(){
    return this.ingrediants.slice();
  }

  getIngrediant(index: number){
    return this.ingrediants[index];
  }

  addIngrediant(ingrediant: Ingrediant){
    this.ingrediants.push(ingrediant);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  addIngrediants(ingrediants: Ingrediant[]){
    this.ingrediants.push(...ingrediants);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  updateIngrediant(index: number ,newIngrediant: Ingrediant){
      this.ingrediants[index] = newIngrediant;
      this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  deleteIngrediant(index: number){
    this.ingrediants.splice(index ,1);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }
}
