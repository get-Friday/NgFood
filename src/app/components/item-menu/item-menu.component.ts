import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngf-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
})
export class ItemMenuComponent implements OnInit {
  @Input() photo: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;

  @Output() clickItem = new EventEmitter();

  addDrink() {
    this.clickItem.emit(this.name)
  }

  constructor() {}

  ngOnInit(): void {}
}
