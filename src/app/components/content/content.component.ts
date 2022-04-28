import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.models';
import PRODUCTS_MOCK from 'src/app/utils/product-mock';

@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
