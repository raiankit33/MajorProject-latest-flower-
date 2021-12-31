import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from 'rxjs';


@Injectable()
export class DriverService{
  
    driver: any;
    order: any;
  item: any;

    httpRegisterOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json'
        })

    }

    
    constructor(private http:HttpClient) {}

    registerDriver(driver){
        
        return this.http.post('http://localhost:5000/drivers/register',driver).pipe(map(res => res));
        
    }
   

    handleError(error){
        return throwError(error.message || "server error")
    }

    
    getDriverDetails(id){
        
        return this.http.get('http://localhost:5000/drivers/getDrivers?user='+id).pipe(map(res => res))
        .pipe(catchError(this.handleError));;
    }
   

    deleteDriver(id){
        
        return this.http.delete('http://localhost:5000/drivers/delete/'+id).pipe(map(res =>
         res)).pipe(catchError(this.handleError));
    }

      updateDriver(driver){
        
        return this.http.patch('http://localhost:5000/drivers/update?id='+driver.id,driver).pipe(map(res => 
        res)).pipe(catchError(this.handleError));
    }

    // order  service 

    registerOrder(order){
        
        return this.http.post('http://localhost:5000/orders/add',order).pipe(map(res => res));
    }

    getOrderDetails(id){
        
        return this.http.get('http://localhost:5000/orders/getOrders?user='+id).pipe(map(res => res));
    }


    deleteOrder(id){
        
        return this.http.delete('http://localhost:5000/orders/delete/'+id).pipe(map(res => res));
    }



// flower product api 


    addItem(item){
        
        return this.http.post('http://localhost:5000/items/add',item).pipe(map(res => res));
    }

    getItem(id){
        
        return this.http.get('http://localhost:5000/items/getItems?user='+id).pipe(map(res => res))
     
    }

    updateItem(item){
        
        return this.http.patch('http://localhost:5000/items/update?id='+item.id,item).pipe(map(res => 
        res)).pipe(catchError(this.handleError));
    }
   
    deleteItem(id){
        
        return this.http.delete('http://localhost:5000/items/delete/'+id).pipe(map(res => res));
    }




    // Cart product api 


    addCart(cart){
        
        return this.http.post('http://localhost:5000/books/add',cart).pipe(map(res => res));
    }


    Cart(id){
        
        return this.http.get('http://localhost:5000/books/getBooks?user='+id).pipe(map(res => res));
    }

    deleteCart(id){
        
        return this.http.delete('http://localhost:5000/books/delete/'+id).pipe(map(res => res));
    }



// get item   by Id in items 
    getItemById(id){
        
        return this.http.get('http://localhost:5000/items/read/'+id).pipe(map(res => res))
     // get item   by Id in items 
    }
}





