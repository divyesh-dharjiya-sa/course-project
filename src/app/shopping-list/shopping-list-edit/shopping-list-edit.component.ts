import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingrediant } from '../ingrediant.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
   @ViewChild('nameInput' , {static: false}) nameInputRef: ElementRef;
    @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;
    @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngrediant = new Ingrediant(ingName, ingAmount);

      this.ingrediantAdded.emit(newIngrediant);
  }

}
