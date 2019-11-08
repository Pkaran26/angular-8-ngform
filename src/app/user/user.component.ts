import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public interests = [
    "Dancing", "Singing", "Reading"
  ]
  userModel = new User('Karan', 'karan@gmail.com', 9893402609, 'Reading')

  emailError = false;

  submitted = false;

  errorMsg = "";

  constructor(private _signupService: SignupService) { }

  ngOnInit() {
    // console.log(this.userModel);
  }
  validateEmail(email){
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)){
      this.emailError = false;
    } else {
      this.emailError = true;
    }
  }
  onSubmit(){
    this.submitted = true;
    this._signupService.signUp(this.userModel)
    .subscribe(
      data=> console.log(data),
      error=> this.errorMsg = error.statusText
    )
  //  this.userModel
  }
}
