import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../foodservice.service';
import { LoginValidation } from '../loginValidation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private foodService:FoodService,private router:Router){
  }

  loginArr:LoginValidation[]=[];




  /*submitLogin(name:string,password:string){
    this.foodService.getDetails().subscribe(data=>{
      for(let i of data){
        if(i.userName==name && i.password==password){
          return this.router.navigate(['/home']);
        }
      }
      return alert("Invalid details");
    });
    
  }
  submitRegister(name:string,password:string){
    if(name==''&&password==''){
      return alert("Please Enter credentials");
    }
    let dataObj:LoginValidation = new LoginValidation(name,password);
    this.foodService.insertData(dataObj).subscribe();
    alert("Registered succesfully now you can login..");
    window.location.reload();
  }*/

  submitLogin(name:string,password:string){
    this.loginArr=this.foodService.getAllLoginDetails();
    for(let i of this.loginArr){
      if(i.userName==name && i.password==password){
        return this.router.navigate(['/header']);
      }
  }
  return alert("Invalid details");
}

}