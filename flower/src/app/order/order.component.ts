import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service'
import { SharedData } from "../service/sharedData.service";
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  user:any;
  ordersDetails:any;
  onlineDetail : any;
  onData :boolean = false;
 offData :boolean =true;

  constructor(
    private driverService : DriverService,
    private sharedData : SharedData,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getOrderDetails();
    this.getOnlineDetails();
  }

  
  getOrderDetails(){
    this.driverService.getOrderDetails(this.user.id).subscribe((res:any)=>{
     this.ordersDetails = res.data;
    });
  }

sendOffline(){
  console.log('jjhh')
  this.offData =true
  this.onData =false;
  
}



sendOnline(){
  console.log("kk")
this.onData =true;
this.offData =false

}
  getOnlineDetails(){
    this.driverService.Cart(this.user.id).subscribe((res:any)=>{
     this.onlineDetail = res.data;
    });
  }

  
  deleteOrder(id){
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
        this.driverService.deleteOrder(id).subscribe( (res:any)=>{
          this.getOrderDetails();
          
        });
      
        Swal.fire(
          'Deleted!',
          'Your Product has been deleted.',
          'success'
        )
      }
    })
  }


  deleteO(id){
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
        this.driverService.deleteCart(id).subscribe( (res:any)=>{
          this.getOnlineDetails();
          
        });
      
        Swal.fire(
          'Deleted!',
          'Your Product has been deleted.',
          'success'
        )
      }
    })
  }


  

}
