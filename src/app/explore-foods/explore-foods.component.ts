import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-foods',
  templateUrl: './explore-foods.component.html',
  styleUrls: ['./explore-foods.component.css']
})
export class ExploreFoodsComponent {
  constructor(private router:Router){}
  BackToHome=()=>this.router.navigate(['/header']);
}
