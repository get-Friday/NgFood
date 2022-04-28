import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { Route, RouterModule } from '@angular/router';
import { FoodComponent } from './pages/food/food.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkComponent } from './pages/drink/drink.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'drink',
    component: DrinkComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    FoodListComponent,
    FoodComponent,
    DrinkListComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
