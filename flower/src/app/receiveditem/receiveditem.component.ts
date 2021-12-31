import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {Router}  from '@angular/router';
import {SharedData} from '../service/sharedData.service';


@Component({
  selector: 'app-receiveditem',
  templateUrl: './receiveditem.component.html',
  styleUrls: ['./receiveditem.component.css']
})
export class ReceiveditemComponent implements OnInit {
  driversDetails:any;
  user:any;
  error: string;
  p: number = 1;

  filterString:any
  constructor(
    private driverService : DriverService,
    private router : Router,
    private sharedData : SharedData
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

  editDriver(driver){
    this.sharedData.updateSharedData(driver);
    this.router.navigate(['/editreceive']);
}

}
