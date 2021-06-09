import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // server_address:string = '/api';                    // For production build
  server_address:string = 'http://localhost:3000';      // For development
  constructor(private http:HttpClient, private router:Router) { }

  register(institute:any){
    return this.http.post<any>(`${this.server_address}/institute/register`,institute)
  }
}
