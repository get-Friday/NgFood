import { Component, OnInit } from '@angular/core';
import IDrink from 'src/app/models/drink.model';
import LIST_DRINK_MOCK from 'src/app/constants/drinks-mock';

@Component({
  selector: 'ngf-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  drinkList: IDrink[] = LIST_DRINK_MOCK

  constructor() { }

  ngOnInit(): void {
  }

}
