import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {Router} from '@angular/router';
import {SharedData} from '../service/sharedData.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  user:any;
  driversDetails :any;
  salesDetails:any;
  error:string;
  filterString:string="";
  p: number = 1;
  
  // salesDetails:[
  //   {sold_quantity:"",
  //   date:"",
  //   product_code:"",
  //   product_name:"",
  //   price:"",
  //   units:""
  // }
  // ]
 

  constructor(
    private driverService: DriverService,
    private router: Router,
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
    }
    );
  }   

 

  // getSalesDetails(){
  //   this.driverService.getSalesDetails(this.user.id).subscribe((res:any)=>{
  //     for(let sdata of this.salesDetails){
  //       for(let data of res.data){
  //           sdata['sold_quantity'] = data.sold_quantity;
  //           sdata['date'] = data.date;
  //       }
  //     }
  //     this.salesDetails = res.data;
  //   });
  // } 

  editDriver(driver){
    this.sharedData.updateSharedData(driver);
    this.router.navigate(['/editsale']);
}


addsale(){
  this.router.navigate(['/addsale']);
}
}
