import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ExploreFoodsComponent } from './explore-foods/explore-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashBoardComponent,
    SearchComponent,
    FoodPageComponent,
    AboutUSComponent,
    OrderPageComponent,
    ExploreFoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
