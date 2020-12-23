import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;

  constructor(

    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }





  onLogoutClick(){
    this.authService.logout();
    this.toastr.success('you are logged out');
    this.router.navigate(['/login']);
    return false;
}




}
