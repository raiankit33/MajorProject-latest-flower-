import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router}  from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }


  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
       
    }

    this.authService.authenticateUser(user).subscribe((data: Response) => {

      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.toastr.success('you are now logged in','Success');
         this.router.navigate(['/admin']);

      }else{
        this.toastr.error(data.msg,'Oops');
      this.router.navigate(['login']);
      }
    })
  }

}

class Response {
  success: string;
  token: string;
  user: Object;
  msg: string;
}

