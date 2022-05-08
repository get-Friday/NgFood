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

  addProductQuantity(productName: string) {
    const find = this.purchase.find((e) => e.name == productName);
    if (find) {
      find.quantity++;
    }
  }

  removeProductQuantity(productName: string) {
    const find = this.purchase.find((e) => e.name == productName);
    if (find) {
      if (find.quantity < 2) {
        this.removeProduct(find.name);
        return;
      }

      find.quantity--;
    }
  }

  insertProduct(product: IDrink | IFood) {
    if (this.purchase.some((e) => e.name == product.name)) {
      this.addProductQuantity(product.name);
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
