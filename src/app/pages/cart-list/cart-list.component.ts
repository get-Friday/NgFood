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

  cartAdd(productName: string) {
    this.productService.addProductQuantity(productName)
  }

  cartRemove(productName: string) {
    this.productService.removeProductQuantity(productName)
  }

  getTotalPrice(): string {
    const BRL = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const totalPrice = this.cartList.reduce((subtotal, item) =>
      subtotal + (item.price * item.quantity), 0
    )

    return BRL.format(totalPrice)
  }
}
