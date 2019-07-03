import { Component, OnInit } from '@angular/core';
import { Ingrediant } from './ingrediant.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apple' , 5),
    new Ingrediant('Banana',12)
  ];
  constructor() { }

  ngOnInit() {
  }

}
