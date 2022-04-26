import { Component, OnInit } from '@angular/core';

interface Product {
  title: string;
  description: string;
  photo: string;
  price: number;
}

@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  productList: Product[] = [
    {
      title: 'Peixe',
      description: 'Peixe pacu grande 1.5kg',
      photo: 'via.placeholder.com/150',
      price: 15
    },
    {
      title: 'Queijo',
      description: 'Queijo redondo amarelo 30cm diametro 1kg',
      photo: 'via.placeholder.com/150',
      price: 27
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
