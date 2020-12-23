import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../service/validate.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
    private toastr: ToastrService,
   
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
      this.toastr.warning('please fill in all field');
      return false;
    }

    // validate email
    if(!this.validateService.validateEmail(user.email)){
      this.toastr.warning('please use a valid email');
      return false;
    }

    //register user

    this.AuthService.registerUser(user).subscribe((data: Response) => {
      if(data.success){
        this.toastr.success('you are now registered','Success');
        this.router.navigate(['/login']);
      }else{
        this.toastr.show('something went wrong');
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