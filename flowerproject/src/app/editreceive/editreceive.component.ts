import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {Router} from '@angular/router';
import {SharedData} from '../service/sharedData.service';

@Component({
  selector: 'app-editreceive',
  templateUrl: './editreceive.component.html',
  styleUrls: ['./editreceive.component.css']
})
export class EditreceiveComponent implements OnInit {

  user:any;
  userObj = {
    id:"",
    receive_item: "",
  
  }

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
            receive_item: res['receive_item'],
           
          } 
          console.log(this.userObj);
  
})
}


updateDriver(){
    
  this.driverService.updateDriver(this.userObj).subscribe(()=>{
  //  this.getDriverDetails();
  this.router.navigate(['/receive']);
  });
 
 
}


}





    
