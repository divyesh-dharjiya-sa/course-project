import { Component, OnInit } from '@angular/core';
import { Ingrediant } from './ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apple' , 5),
    new Ingrediant('Banana',12)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingrediant: Ingrediant){
    this.ingrediants.push(ingrediant);
  }

}
