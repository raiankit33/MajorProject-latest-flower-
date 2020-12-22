import { Injectable } from "@angular/core";


import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    httpRegisterOptions = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json'
        })
    }



    // head:HttpHeaders = new HttpHeaders();
    // url = "http://localhost:5000/users/register";
    // data = {
    //     "name": "John Doe",
    //     "email": "john@gmail.com",
    //     "username": "john",
    //     "password": "john@123"
    // }

    constructor(private http:HttpClient) {}

   registerUser(user){
       let headers = new Headers();
       headers.append('Content-Type','application/json');
       return this.http.post('http://localhost:5000/users/register',user, this.httpRegisterOptions).pipe(map(res => res));
   }

      authenticateUser(user){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:5000/users/authenticate',user,this.httpRegisterOptions).pipe(map(res => res));

      }

      storeUserData(token, user){
           localStorage.setItem('id_token',token);
           localStorage.setItem('user', JSON.stringify(user));
           this.authToken = token;
           this.user = user;
      }

        logout(){
            this.authToken =null;
            this.user =null;
            localStorage.clear();
        }
   
}
