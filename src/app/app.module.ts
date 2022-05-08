import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { DrinkListComponent } from './pages/drink-list/drink-list.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { CartListComponent } from './pages/cart-list/cart-list.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'food',
    component: FoodListComponent,
  },
  {
    path: 'drink',
    component: DrinkListComponent,
  },
  {
    path: 'cart',
    component: CartListComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FoodListComponent,
    DrinkListComponent,
    ItemMenuComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
