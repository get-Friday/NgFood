import { Component } from '@angular/core';

@Component({
  selector: 'NGF-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ng-Food';
  cheese = 'Queijo';
  cheeseDesc = 'Queijo bom';
  fish = 'Peixe';
  fishDesc = 'Peixe azul as vezes verde';
}
