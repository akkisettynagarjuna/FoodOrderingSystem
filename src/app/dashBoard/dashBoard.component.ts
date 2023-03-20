import { Component } from '@angular/core';
import { FoodService } from '../foodservice.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css']
})
export class DashBoardComponent {
  foods:Food[]=[];
  constructor(private foodService:FoodService, private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params['searchTerm']){
        this.foods=this.foodService.getAll().filter(food=>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      }
      else{
        this.foods=this.foodService.getAll();
      }
    })
  }
}

