import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ngf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  qntProducts: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.qntProducts = this.productService.cartSize()
  }

}
