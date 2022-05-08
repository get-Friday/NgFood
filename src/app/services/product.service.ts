import { Injectable } from '@angular/core';
import IDrink from '../models/drink.model';
import IFood from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  purchase: IDrink[] | IFood[] = [];

  constructor() {}

  cartSize() {
    return this.purchase.length;
  }

  insertProduct(product: IDrink | IFood) {
    const find = this.purchase.find((e) => e.name == product.name);

    if (find) {
      find.quantity++;
      return;
    }

    this.purchase.push(product);
  }

  clearPurchase() {
    this.purchase = [];
  }

  removeProduct(productName: string) {
    const productIndex = this.purchase.findIndex((e) => e.name == productName);
    this.purchase.splice(productIndex, 1);
  }
}
