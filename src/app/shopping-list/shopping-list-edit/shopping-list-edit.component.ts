import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingrediant } from '../ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
   @ViewChild('nameInput' , {static: false}) nameInputRef: ElementRef;
    @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngrediant = new Ingrediant(ingName, ingAmount);

      this.shoppingListService.addIngrediant(newIngrediant);
      console.log(newIngrediant);
  }

}
