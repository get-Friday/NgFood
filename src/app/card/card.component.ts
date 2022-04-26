import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'NGF-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() foodTitle: string = ""
  @Input() foodDescription: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
