import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {ActivatedRoute} from '@angular/router';
import {SharedData} from '../service/sharedData.service';

@Component({
  selector: 'app-updatesetting',
  templateUrl: './updatesetting.component.html',
  styleUrls: ['./updatesetting.component.css']
})
export class UpdatesettingComponent implements OnInit {
  user:any;

  product_code: String;
   product_name: String;
   price:String;
   units:String;

  userObj = {
    id:"",
    date:"",
product_code :"",
product_name : "",
price: "",
units:"",
initial_quantity:"",
alert_quantity:"",
sold_quantity:"",
receive_item:"",

  };

  constructor(
    private driverService : DriverService,
    private router : ActivatedRoute,
    private sharedData : SharedData
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.sharedData.currentSharedData.subscribe(res =>{ 
      this.userObj={
             
              id : res['_id'],
              date:res['date'],
            product_code: res['product_code'],
            product_name:res['product_name'],
            price: res['price'],
            units:res['units'],
            initial_quantity:res['initial_quantity'],
        alert_quantity:res['alert_quantity'],
        sold_quantity:res['sold_quantity'],
        receive_item:res['receive_item']
         
          } 
    
      


  })
}

updateDriver(){
    
  this.driverService.updateDriver(this.userObj).subscribe(()=>{
  //  this.getDriverDetails();
  
  });
 
  
}




}