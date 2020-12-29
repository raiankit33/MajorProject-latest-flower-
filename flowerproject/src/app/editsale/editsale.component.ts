import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {Router} from '@angular/router';
import {SharedData} from '../service/sharedData.service';

@Component({
  selector: 'app-editsale',
  templateUrl: './editsale.component.html',
  styleUrls: ['./editsale.component.css']
})
export class EditsaleComponent implements OnInit {

  user:any;
  sold_quantity: string;
  date:string;
  userObj = {
    id:"",
    sold_quantity: "",
    date:"",


  };

  constructor(
    private driverService : DriverService,
    private router: Router,
    private sharedData : SharedData
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.sharedData.currentSharedData.subscribe(res =>{ 
      this.userObj={
             
              id : res['_id'],
            sold_quantity: res['sold_quantity'],
            date:res['date'],
           
         
          } 
          console.log(this.userObj);
  
})
}


updateDriver(){
    
  this.driverService.updateDriver(this.userObj).subscribe(()=>{
  //  this.getDriverDetails();
  this.router.navigate(['/sale']);
  });
 
 
}


}



