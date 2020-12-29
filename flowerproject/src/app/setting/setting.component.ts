import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import { SharedData } from "../service/sharedData.service";
import {DriverService} from '../service/driver.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  user:any;
  driversDetails:any;

  constructor(
    private router : Router,
    private driverService : DriverService,
    private sharedData : SharedData,
    
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getDriverDetails();
    this.sharedData.updateSharedData('driver');
  }

  getDriverDetails(){
    this.driverService.getDriverDetails(this.user.id).subscribe((res:any)=>{
      this.driversDetails = res.data;
    });
  }  

  deleteDriver(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.driverService.deleteDriver(id).subscribe( (res:any)=>{
          this.getDriverDetails();
          
        });
      
        Swal.fire(
          'Deleted!',
          'Your Product has been deleted.',
          'success'
        )
      }
    })
  }
  
  
  editDriver(driver){
    this.sharedData.updateSharedData(driver);
    this.router.navigate(['/upsetting']);
}

}
