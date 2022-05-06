import { Component, OnInit } from '@angular/core';
import IDrink from 'src/app/models/drink.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngf-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  drinkList: IDrink[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IDrink[]>("http://localhost:3000/drinks").subscribe((value: IDrink[]) => {
      this.drinkList = value
    })
  }

}
