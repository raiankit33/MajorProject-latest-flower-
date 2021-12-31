
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable()
export class SharedData{

private sharedData = new BehaviorSubject({});
  currentSharedData =this.sharedData.asObservable(); 

  // private productData = new BehaviorSubject({
  //   product_name: "",
  //   product_code: "",
  //   price: '',
  // });
  // currentProductData =this.productData.asObservable(); 
  //   constructor(){}



    updateSharedData(data){
        this.sharedData.next(data);
    }

    // updateProductData(product){
    //   this.productData.next(product);
    // }
   

}