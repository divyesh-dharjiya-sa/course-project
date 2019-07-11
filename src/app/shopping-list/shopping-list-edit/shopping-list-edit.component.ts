import { Component, OnInit, ViewChild , OnDestroy } from '@angular/core';
import { Ingrediant } from '../ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit , OnDestroy {
  @ViewChild('f', { static: false }) shoppingListForm: NgForm;
  
  subscription: Subscription;
  editedItemIndex: number;
  editMode = false;
  editedItem: Ingrediant;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingListService.getIngrediant(index);
            this.shoppingListForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
            
    });
  }

  onSubmit(form: NgForm){
      const value = form.value;
      const newIngrediant = new Ingrediant(value.name, value.amount);

        if(this.editMode){
          this.shoppingListService.updateIngrediant(this.editedItemIndex , newIngrediant);
          }
        else{
          this.shoppingListService.addIngrediant(newIngrediant);
        }
        this.editMode = false;
        form.reset()
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIngrediant(this.editedItemIndex);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
