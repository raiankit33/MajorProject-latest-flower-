import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {SharedData} from '../service/sharedData.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  step: any = 1;
  hide:boolean =false;
  address: string;
  phone_no: string;
  state: string;
  city: string;
  zip: string;
  created_by: string;
units :string ;
country : string;

after =false;
strikeCheckout:any = null;
  user:any;
  item:any;
  userObj = {
    id:"",
    product_name: "",
    product_code:"",
    price:"",
    image:"",
   units :"",
   country : ""
  };

  constructor(private driverService : DriverService,
    private router: Router,
    private authService: AuthService,
    private sharedData : SharedData) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.item = JSON.parse(localStorage.getItem("item"));
    this.stripePaymentGateway();

    this.sharedData.currentSharedData.subscribe(res =>{ 
      this.userObj={
             
              id : res['_id'],
              product_name: res['product_name'],
              product_code:res['product_code'],
              price:res['price'],
              image:res['image'],
              units:res['quantity'],
              country:res['country']
          } 
         
  
})
  }


  quantity:number=1;
  i=1;
  plus(){
   if(this.i !=5){
     this.i++;
     this.quantity=this.i;
   }
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }

  remove(){
    this.userObj = {
      id:"",
      product_name: "",
      product_code:"",
      price:"",
      image:"",
     units :"",
     country : ""
    };
  }

  next1(){
    this.step = this.step + 1 ;
  }



  updateItem(){
    
    this.driverService.updateItem(this.userObj).subscribe(()=>{
    //  this.getDriverDetails();
    
    });
}



onAddSubmit(){
 
  const item = {
    product_name: this.userObj.product_name,
    product_code: this.userObj.product_code,
    price: this.userObj.price,
    image: this.userObj.image,
 name : this.user.name,
 email : this.user.email,
    address: this.address,
    units: this.quantity,
    phone_no: this.phone_no,
    state: this.state,
    city: this.city,
    country: this.country,
    zip: this.zip,
    created_by :this.user.id
    
  }

console.log(item)
  this.driverService.addCart(item).subscribe( res=> {
    console.log(res);
    this.hide = true
    // this.form.reset();
   this.after = true
    
  })
    
   
}

confirm(){
  Swal.fire({
    title:  'Success!',
    text: 'Your order confirm !',
    icon: 'success',
   
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: 'Ok !'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['/main'])
  
    }
  })
}


checkout(amount) {
  const strikeCheckout = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51IzFlCSG5toSUguQzFRHOY1WCrgfBTwPpTD1zLMEzCOyBBEi93NdGlw6ZLXD0hmx4tWL5cmnuYOKGKDRnfPriYnK004XEe8xTF',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken)
      // alert('Stripe token generated!');
      Swal.fire({
        title:  'Success!',
        text: 'Your order confirm !',
        icon: 'success',
       
        confirmButtonColor: '#3085d6',
        
        confirmButtonText: 'Ok !'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/main'])
      
        }
      })
    }
  });

  strikeCheckout.open({
    name: 'RemoteStack',
    description: 'Payment ',
    amount: amount * 100
  });
}


stripePaymentGateway() {
  if(!window.document.getElementById('stripe-script')) {
    const scr = window.document.createElement("script");
    scr.id = "stripe-script";
    scr.type = "text/javascript";
    scr.src = "https://checkout.stripe.com/checkout.js";

    scr.onload = () => {
      this.strikeCheckout = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51IzFlCSG5toSUguQzFRHOY1WCrgfBTwPpTD1zLMEzCOyBBEi93NdGlw6ZLXD0hmx4tWL5cmnuYOKGKDRnfPriYnK004XEe8xTF',
        locale: 'auto',
        token: function (token: any) {
          console.log(token)
          
          alert('Payment via stripe successfull!');
        }
      });
    }
      
    window.document.body.appendChild(scr);
  }
}


}

