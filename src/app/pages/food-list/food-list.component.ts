import { Component, OnInit } from '@angular/core';
import IFood from 'src/app/models/food.model';
import LIST_FOOD_MOCK from 'src/app/constants/foods-mock';

@Component({
  selector: 'ngf-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foodList: IFood[] = LIST_FOOD_MOCK

  constructor() { }

  ngOnInit(): void {
  }

}
