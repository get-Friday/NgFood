import { Component, OnInit } from '@angular/core';
import IDrink from 'src/app/models/drink.model';
import IFood from 'src/app/models/food.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ngf-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartList: IFood[] | IDrink[] = this.productService.purchase

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  removeProduct(productName: string) {
    this.productService.removeProduct(productName)
  }

  clearCart(){
    this.productService.clearPurchase()
    this.cartList = this.productService.purchase
  }
}
