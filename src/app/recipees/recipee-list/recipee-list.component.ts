import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css']
})
export class RecipeeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', 
    'https://media1.popsugar-assets.com/files/thumbor/JSTgb1eAj9iLhGw79esnoyLd18U/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2017/03/07/761/n/41297547/706f213c58beeaf9643330.89028645_edit_img_image_43250768_1488401125/i/Healthy-Salad-Recipes-Chicken.jpg'),
    new Recipe('A test recipe', 'This is just a test', 
    'https://media1.popsugar-assets.com/files/thumbor/JSTgb1eAj9iLhGw79esnoyLd18U/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2017/03/07/761/n/41297547/706f213c58beeaf9643330.89028645_edit_img_image_43250768_1488401125/i/Healthy-Salad-Recipes-Chicken.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
