
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable()
export class SharedData{

private sharedData = new BehaviorSubject({});
  currentSharedData =this.sharedData.asObservable(); 

  private productData = new BehaviorSubject({
    price: "",
    count: 0,
    id: '',
  });
  currentProductData =this.productData.asObservable(); 
    constructor(){}



    updateSharedData(data){
        this.sharedData.next(data);
    }

    updateProductData(product){
      this.productData.next(product);
    }
   

}