import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginValidation } from './loginValidation';
import { Food } from './shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private httpClient: HttpClient) { }


  //  Spring --->Backend --- MySQL
/*  URL="http://localhost:8080/validateUser";
  URL1="http://localhost:8080/insertData";
 

  getDetails():Observable<LoginValidation[]>{
    return this.httpClient.get<LoginValidation[]>(`${this.URL}`);
  }

  insertData(dataObj : LoginValidation):Observable<any>{
    let headers = {'content-type' : 'application/json'};
    let jsondataObj = JSON.stringify(dataObj);
    return this.httpClient.post(this.URL1,jsondataObj,{'headers':headers});
  }*/




  loginArr:LoginValidation[]=[
    {userName:"Nagarjuna",  password:"wissen@123"},
    {userName:"Sasank", password:"sonu!@#123"},
    {userName:"admin", password:"admin"},
    {userName:"Charan", password:"Charan"}
  ]

  getAllLoginDetails(){
    return this.loginArr;
  }

  
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Mutton Gravy',
        cookTime: '60-90 min',
        price: 450,
        favorite: true,
        origins: ['Indian Dish'],
        imageUrl: '/assets/63201465.webp',
        imageLogo:'/assets/Paradise-Logo1.jpg'
      },
      {
        id: 2,
        name: 'Chicken biriyani',
        price: 300,
        cookTime: '80-120 min',
        favorite: true,
        origins: ['Indian Dish'],
        imageUrl: '/assets/instant-pot-chicken-biryani-pressure-cooker-indian.jpg',
        imageLogo:'/assets/31509546-2009-4ef0-93f0-5c5f4c2832c9.png'
      },
      {
        id: 3,
        name: 'Fish Curry',
        price: 350,
        cookTime: '45-65 min',
        favorite: false,
        origins: ['Indian Dish'],
        imageUrl: '/assets/istockphoto-910315272-612x612.jpg',
        imageLogo:'/assets/download.png'
      },
      {
        id: 4,
        name: 'Chicken Gravy',
        price: 220,
        cookTime: '35-60 min',
        favorite: true,
        origins: ['Indian Dish'],
        imageUrl:   '/assets/istockphoto-914008376-612x612.jpg',
        imageLogo:'/assets/logo2.png'
      },
      {
        id: 5,
        name: 'Chicken Kabab',
        price: 180,
        cookTime: '60-70 min',
        favorite: true,
        origins: ['Indian Dish'],
        imageUrl: '/assets/MEXICAN_LIME_CHICKEN.jpg',
        imageLogo:'/assets/3ocylcHtBoE9Cmcp.jpg'
      },
      {
        id: 6,
        name: 'Pizza',
        price: 150,
        cookTime: '40-50 min',
        favorite: false,
        origins: ['Italy Dish'],
        imageUrl:  '/assets/pizza-5179939_960_720.jpg',
        imageLogo:'/assets/download (1).png'
      },
      {
        id: 7,
        name: 'Sushi',
        price: 333,
        cookTime: '35-65 min',
        favorite: false,
        origins: ['Japan Dish'],
        imageUrl: '/assets/Maki-sushi-rolls.webp',
        imageLogo:'/assets/5c2a6d7a-f813-4afb-9177-b3ec2da10253.avif'
      },
      {
        id: 8,
        name: 'Dosa',
        price: 25,
        cookTime: '10-15 min',
        favorite: true,
        origins: ['Proddatur Dish'],
        imageUrl: '/assets/Masala-dosa-scaled.jpg',
        imageLogo:'/assets/cce8dd70-4386-4442-b12b-9dc1a53deeb9.avif'
      },
    ]
  }
}
