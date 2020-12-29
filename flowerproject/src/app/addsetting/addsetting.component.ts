import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service'
import {Router} from '@angular/router';
import { reset } from 'colors';

@Component({
  selector: 'app-addsetting',
  templateUrl: './addsetting.component.html',
  styleUrls: ['./addsetting.component.css']
})
export class AddsettingComponent implements OnInit {
  
  user:any;
  date:string;
  product_code: string;
  product_name: string;
  price:string;
  units:string;
  alert_quantity:string;
  initial_quantity:string;
  sold_quantity:string;
  receive_item:string;
  created_by :string;

  constructor(
    private driverService : DriverService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  onAddSubmit(){

    const driver = {
      date :this.date,
      product_code: this.product_code,
      product_name: this.product_name,
      price: this.price,
      units: this.units,
      initial_quantity:this.initial_quantity,
    alert_quantity:this.alert_quantity,
    sold_quantity:this.sold_quantity,
    receive_item:this.receive_item,
      created_by :this.user.id
      
    }
   
    this.driverService.registerDriver(driver).subscribe( res=> {
      console.log(res);
      this.router.navigate(['/setting']);
    })
      
      
  }
   
  
  

}

