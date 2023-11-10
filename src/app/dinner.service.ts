import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DinnerService {

  
  private apiUrl = 'https://localhost:7148/api/dinners';

  constructor(private http: HttpClient) { }

  //CREATE
  createDinner(dinner: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dinner);
  }

  // READ
  getDinners(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
    
  }
  //update
  updateDinner(id: number, dinner: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, dinner);
  }
  //delete
  // deleteDinner(id: number): Observable<any> {
  //   //const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<any>("https://localhost:7077/api/dinners"+id);
  // }
  //delete
  deleteDinner(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }



 
}


 

