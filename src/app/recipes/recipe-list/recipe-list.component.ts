import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Dal Fry' ,
      'I don’t like the regular pressure cooker with turmeric and salt only yellow dal. I want mine to have bold flavors, ' ,
      'https://myfoodstory.com/wp-content/uploads/2016/03/dhaba-style-dal-fry-recipe.1024x1024-2.jpg'
    ),
    new Recipe(
      'Baingan Bharta',
      'I’m a massive baingan bharta snob because there is nothing appetising about pulpy eggplant or baingan. ',
      'https://myfoodstory.com/wp-content/uploads/2017/11/Easy-Baingan-Bharta-Smoky-eggplant-stir-fry-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
