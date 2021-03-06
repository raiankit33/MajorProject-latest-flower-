import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service'
import {Router} from '@angular/router';
import { document } from '../../assets/order.js';
import { ToastrService } from 'ngx-toastr';


declare var  setProgressBar: any;


@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  step: any = 1;

  user:any;
   
  company_name: string;
  name: string;
  email_address: string;
  phone:string;
  address:string;
  city:string;
  state:string;
  zip:string;
  country:string;
  date:string;
  order_id:string;
  product_code:string;
  product_name:string;
  units:string;
  status:string;
  bill_amount:string;
  advance:string;
 
  mode_of;

  constructor(
    private driverService : DriverService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem("user"));
     
  }

  next1(){
    this.step = this.step + 1 ;
  }
 
  previous()
{
  this.step = this.step - 1 ;
}    
  onAddSubmit(){

    const order = {

      company_name: this.company_name,
      name:this.name,
      email_address: this.email_address,
      phone:this.phone,
      address:this.address,
      city:this.city,
      state:this.state,
      zip:this.zip,
      country:this.country,
      date:this.date,
      order_id:this.order_id,
      product_code:this.product_code,
      product_name:this.product_name,
      units:this.units,
      status:this.status,
      bill_amount:this.bill_amount,
      advance:this.advance,
      
      mode_of:this.mode_of,
     
      created_by: this.user.id
    }

    this.driverService.registerOrder(order).subscribe( res=> {
      if(res!=res){
        this.toastr.error('error','Oops');
      this.router.navigate(['/addorder']);

       

      }else{
        this.toastr.success('data insert successfully','Success');
         this.router.navigate(['/order']);

      }
      console.log(res);
      // this.router.navigate(['/order']);
    })
     
      
  }
   
  
  

}



