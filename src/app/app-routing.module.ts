import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HeaderComponent } from './header/header.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { LoginComponent } from './login/login.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ExploreFoodsComponent } from './explore-foods/explore-foods.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'header', component:HeaderComponent},
  {path:'home', component:DashBoardComponent},
  {path:'search/:searchTerm', component:HeaderComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'AboutUS', component:AboutUSComponent},
  {path:'order',component:OrderPageComponent},
  {path:'exploreFoods',component:ExploreFoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
