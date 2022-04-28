import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.models';
import PRODUCTS_MOCK from 'src/app/utils/product-mock';

@Component({
  selector: 'NGF-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  productList: Product[] = PRODUCTS_MOCK

  constructor() { }

  ngOnInit(): void {
  }

  alert(name: string) {
    alert(name)
  }

  filterFood(): Product[] {
    const foodList = this.productList.filter(e => e.type == 'food')
    return foodList
  }
}
