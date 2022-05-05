import { Component, OnInit } from '@angular/core';
import IMenu from 'src/app/models/menu.model';
import LIST_MENU_MOCK from 'src/app/constants/menus-mock';

@Component({
  selector: 'ngf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listMenu: IMenu[] = LIST_MENU_MOCK

  constructor() { }

  ngOnInit(): void {
  }

}
