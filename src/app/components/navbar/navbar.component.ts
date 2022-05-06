import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  qntProducts: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
