import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../service/driver.service';
import { SharedData } from '../service/sharedData.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  onlineDetail: any;
  user: any;

  constructor(  private driverService : DriverService,
    
    private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getOnlineDetails();
  }



  getOnlineDetails(){
    this.driverService.Cart(this.user.id).subscribe((res:any)=>{
     this.onlineDetail = res.data;
     console.log(this.onlineDetail)
    });
  }


}
