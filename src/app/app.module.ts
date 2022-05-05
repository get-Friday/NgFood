import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { DrinkListComponent } from './pages/drink-list/drink-list.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'food',
    component: FoodListComponent
  },
  {
    path: 'drink',
    component: DrinkListComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FoodListComponent,
    DrinkListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
