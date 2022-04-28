import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.models';
import PRODUCTS_MOCK from 'src/app/utils/product-mock';

@Component({
  selector: 'NGF-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  productList: Product[] = PRODUCTS_MOCK

  constructor() { }

  ngOnInit(): void {
  }

  alert(name: string) {
    alert(name)
  }

  filterDrink(): Product[] {
    const foodList = this.productList.filter(e => e.type == 'drink')
    return foodList
  }
}
