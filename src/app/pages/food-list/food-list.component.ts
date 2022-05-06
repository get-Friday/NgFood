import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import IFood from 'src/app/models/food.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ngf-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foodList: IFood[] = []

  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {
    this.http
      .get<IFood[]>("http://localhost:3000/foods")
      .subscribe((value: IFood[]) => {
        this.foodList = value
      })
  }

  addToCart(productName: string) {
    const product = this.foodList.find(e => e.name == productName)
    if (product) {
      this.productService.insertProduct(product)
    }
  }

}
