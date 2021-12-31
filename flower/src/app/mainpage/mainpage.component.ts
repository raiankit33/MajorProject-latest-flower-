import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router}  from '@angular/router';
import { SharedData } from "../service/sharedData.service";
import {DriverService} from '../service/driver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  user:any;
  item:any;
  itemsDetails:any;
  error:string;
  name:string ="";
  //  product = [
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
  //    {name:'Rose',code:'443',price:"100"},
     
  //  ]
     
   
  constructor(
    private router : Router,
    private driverService : DriverService,
    private sharedData : SharedData,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
 
    this.user = JSON.parse(localStorage.getItem("user"));
    this.item = JSON.parse(localStorage.getItem("item"));
    
    this.getItem();
    this.sharedData.updateSharedData('item');
  }


  SearchI() {
    if (this.name == "") {
      this.getItem();
    } else {
      this.itemsDetails = this.itemsDetails.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
  

  getItem(){
    this.driverService.getDriverDetails(this.user.id).subscribe((res:any)=>{
      this.itemsDetails = res.data;
     
    }
    );
  } 

  cart(item){
    this.sharedData.updateSharedData(item);
    this.toastr.success('Added to cart');
    this.router.navigate(['',{id:item._id}]);
    this.toastr.success('Added to cart');
  }

}