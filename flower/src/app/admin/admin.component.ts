import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  driversDetails:any;
  user:any;
  error:string;
  p: number = 1;
  filterString:any;
  constructor(
    private driverService : DriverService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getDriverDetails();
  }

  getDriverDetails(){
    this.driverService.getDriverDetails(this.user.id).subscribe((res:any)=>{
      this.driversDetails = res.data;
    },(error)=> {
      this.error = 'Server Down Please try After Sometime ..! '
    });
  }  

}
