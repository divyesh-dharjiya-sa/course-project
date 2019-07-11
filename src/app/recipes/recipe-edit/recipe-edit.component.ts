import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute , private recipeService: RecipeService , private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
          this.id = +params['id'];
          this.editMode = (params['id'] != null);
          this.initForm();
    });
  }

  private initForm(){
    const recipe = this.recipeService.getRecipe(this.id);
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngrediant = new FormArray([]);

    if(this.editMode){
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription =  recipe.description;
      if(recipe['ingrediant']){
            for(let ingrediant of recipe.ingrediant){
              recipeIngrediant.push(
                  new FormGroup({
                    name: new FormControl(ingrediant.name , Validators.required),
                    amount: new FormControl(ingrediant.amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
                  }));
            }
      }
    }

    this.recipeForm =  new FormGroup({
        name: new FormControl(recipeName , Validators.required),
        imagePath: new FormControl(recipeImagePath, Validators.required),
        description: new FormControl(recipeDescription, Validators.required),
        ingrediant: recipeIngrediant
    });
  }

  onSubmit(){
      if(this.editMode){
        this.recipeService.updateRecipe(this.id , this.recipeForm.value);
      }
      else{
        this.recipeService.addRecipe(this.recipeForm.value); 
      }
      this.onCancle();
  }

  addIngrediant(){
    (<FormArray>this.recipeForm.get('ingrediant')).push(
          new FormGroup({
            name: new FormControl(),
            amount: new FormControl()
    }));
  }

  deleteIngrediant(index: number){
    (<FormArray>this.recipeForm.get('ingrediant')).removeAt(index);
  }

  onCancle(){
      this.router.navigate(['../'],{relativeTo: this.route});
  }

}
