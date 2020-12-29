import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class DriverService{
   
    driver: any;
    sale:any;
    receive:any;
    httpRegisterOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json'
        })

    }

    
    constructor(private http:HttpClient) {}

    registerDriver(driver){
        
        return this.http.post('http://localhost:5000/drivers/register',driver).pipe(map(res => res));
    }
    
    getDriverDetails(id){
        
        return this.http.get('http://localhost:5000/drivers/getDrivers?user='+id).pipe(map(res => res));
    }

    deleteDriver(id){
        
        return this.http.delete('http://localhost:5000/drivers/delete/'+id).pipe(map(res => res));
    }

      updateDriver(driver){
        
        return this.http.patch('http://localhost:5000/drivers/update?id='+driver.id,driver).pipe(map(res => res));
    }

    // sale service

    registerSale(sale){
        
        return this.http.post('http://localhost:5000/sales/add',sale).pipe(map(res => res));

    }

    getSalesDetails(id){
        
        return this.http.get('http://localhost:5000/sales/getSales?user='+id).pipe(map(res => res));
    }

    updateSale(sale){
        
        return this.http.patch('http://localhost:5000/sales/update?id='+sale.id,sale).pipe(map(res => res));
    }


    // receive 

    registerReceived(receive){
        
        return this.http.post('http://localhost:5000/receives/add',receive).pipe(map(res => res));

    }

}
