import { Component, OnInit } from '@angular/core';
import { Ingrediant } from './ingrediant.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[];
  x: string = "hello";
  constructor(private shoppingListService: ShoppingListService) { }
 
  ngOnInit() {
     this.ingrediants = this.shoppingListService.getIngrediants();

     this.shoppingListService.ingrediantsChanged
     .subscribe((ingrediants: Ingrediant[]) => {
          this.ingrediants = ingrediants;
  
     });
  }

  onEdit(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
