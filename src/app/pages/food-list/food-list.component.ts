import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import IFood from 'src/app/models/food.model';

@Component({
  selector: 'ngf-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foodList: IFood[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IFood[]>("http://localhost:3000/foods").subscribe((value: IFood[]) => {
      this.foodList = value
    })
  }

}
