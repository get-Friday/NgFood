import { Component, OnInit } from '@angular/core';
import Product from 'src/models/product.models';
import PRODUCTS_MOCK from 'src/utils/product-mock';

@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  productList: Product[] = PRODUCTS_MOCK

  constructor() { }

  ngOnInit(): void {
  }

}
