import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000';
  login(email : string,password: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,{email,password})
  }
  Signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
  addnewblog( title : any, description : any, session_date : any ): Observable<any>{
    return this.http.post(`${this.apiUrl}/blog_sessions`, { title , description , session_date }) ;
  }
}
