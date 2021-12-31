import { Component, OnInit } from '@angular/core';
import {DriverService} from '../service/driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  user:any;
  
  remarks: string;
  alert_quantity:string;
  initial_quantity:string;
 

  constructor(
    private driverService : DriverService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }


  onAddSubmit(){
  const item = {

  
    initial_quantity:this.initial_quantity,
    alert_quantity:this.alert_quantity,
    remarks: this.remarks,
    created_by :this.user.id
    
  }
  
}

}
