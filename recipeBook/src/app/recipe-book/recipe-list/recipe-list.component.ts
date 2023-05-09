import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test',
      'A test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'B test',
      'B test',
      'https://www.cookipedia.co.uk/wiki/images/4/47/Marmitako_%282%29_recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
