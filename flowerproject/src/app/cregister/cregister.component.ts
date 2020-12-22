import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../service/validate.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cregister',
  templateUrl: './cregister.component.html',
  styleUrls: ['./cregister.component.css']
})
export class CregisterComponent implements OnInit {

  name: String;
  email: String;
  username: String;
  password: String;

  constructor(
    private AuthService: AuthService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email:this.email,
      username: this.username,
      password: this.password
    } 

      //require field
      if(!this.validateService.validateRegister(user)){
        this.flashMessage.show('please fill in all field', {cssClass: 'alert-danger',timeout:3000});
        return false;
      }
  
      // validate email
      if(!this.validateService.validateEmail(user.email)){
        this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger',timeout:3000});
        return false;
      }
  
      //register user
  
      this.AuthService.registerUser(user).subscribe((data: Response) => {
        if(data.success){
          this.flashMessage.show('you are now registered',{cssClass: 'alert-success',timeout:3000});
          this.router.navigate(['/login']);
        }else{
          this.flashMessage.show('something went wrong',{cssClass: 'alert-danger',timeout:3000});
          this.router.navigate(['/register']);
        }
      })
    }
  }

  
class Response {
  success: string;
  token: string;
  user: Object;
}




  
