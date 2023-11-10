import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!:any|undefined|null;
  private baseUrl="https://localhost:7275/api/User/";
  private userPayLoad:any;

  constructor(private http:HttpClient,private router:Router) {
    this.userPayLoad=this.decodedToken();
   }

   signUp(user:any){
      return this.http.post<any>(this.baseUrl+"register",user);
   }

   storeToken(token:any){
      localStorage.setItem('token',token);
    }

    login(user:any){
      return this.http.post<any>(this.baseUrl+"authenticate",user);
    }
    getToken(){
      return localStorage.getItem('token');
    }
  decodedToken(): any {
    const jwtHelper=new JwtHelperService();
    this.token=this.getToken();
    console.log(jwtHelper.decodeToken(this.token));
    return jwtHelper.decodeToken(this.token);  
  }
}
