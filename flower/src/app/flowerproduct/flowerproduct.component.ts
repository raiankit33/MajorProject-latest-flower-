import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgxImageCompressService} from 'ngx-image-compress';

@Component({
  selector: 'app-flowerproduct',
  templateUrl: './flowerproduct.component.html',
  styleUrls: ['./flowerproduct.component.css']
})
export class FlowerproductComponent implements OnInit {
  user:any;

  form = new FormGroup({
  
    product_name: new FormControl('', Validators.required),
  
    product_code: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    price: new FormControl('All Access', Validators.required),
    image: new FormControl(''),


  })

  p: number = 1;
image:string;
  product_name:string;
  product_code:string;
  price:string;

  created_by :string;
  images;
  itemsDetails: any;
  imgResultAfterCompress: any= [];

  constructor(
    private driverService : DriverService,
    private router: Router,
    private imageCompress: NgxImageCompressService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getDriverDetails();
  }

  onImage(event){
    console.log(event);
    
  }

  compressFile(event) {
  
    this.imageCompress.uploadFile().then(({image, orientation}) => {
    
  
      this.imageCompress.compressFile(image, orientation, 50, 50).then(

        results => {

          this.imgResultAfterCompress   = results;
         
          console.log('Size in bytes is now:', this.imageCompress.byteCount(results));
      
        }
      );

      
    });
    
  }

  // selectImage(event){

  // if(event.target.file.length>0){
  //   const file = event.target.file[0];
  // this.images = file;  }

  // }
  onAddSubmit(){
    
    const item = {

      product_code: this.product_code,
      product_name: this.product_name,
      price: this.price,
      image: this.image,
     
      created_by :this.user.id
      
    }


    this.driverService.addItem(item).subscribe( res=> {
      console.log(res);
      this.form.reset();
      this.getDriverDetails();
      Swal.fire(
        'Flower added successfully!',
        '',
        'success'
      )
      
    })
      
     
  }

  hetItem(event){
  
    this.driverService.getItemById(event).subscribe((res:any)=>{
     console.log(res)
    });
  }

  getDriverDetails(){
    this.driverService.getItem(this.user.id).subscribe((res:any)=>{
     this.itemsDetails = res.data;
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
        this.driverService.deleteItem(id).subscribe( (res:any)=>{
          this.getDriverDetails();
          console.log(res)
          Swal.fire(
            'Deleted!',
            'Your Product has been deleted.',
            'success'
          )
        });
      
     
      }
    })
  }

}

