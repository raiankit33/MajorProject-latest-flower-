import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../service/validate.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';


declare const pas: any;

@Component({
  selector: 'app-cregister',
  templateUrl: './cregister.component.html',
  styleUrls: ['./cregister.component.css']
})
export class CregisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirm_password: new FormControl('',Validators.required)

  })
  name: String;
   email:string;
  username: String;
  password: String;
  confirm_password:string;

  constructor(
    private AuthService: AuthService,
    private validateService: ValidateService,
    private toastr: ToastrService,
   
    private router: Router

  ) { }



  ngOnInit(): void {
    new pas();
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email:this.email,
      username: this.username,
      password: this.password,
      confirm_password: this.confirm_password
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
        this.router.navigate(['/']);
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