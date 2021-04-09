import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
 
  get(phoneNumber): Observable<any> {
    return this.http.get(`${baseUrl}/${phoneNumber}`);
  }
 
  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
 
  update(phoneNumber, data): Observable<any> {
    return this.http.put(`${baseUrl}/${phoneNumber}`, data);
  }
 
  delete(phoneNumber): Observable<any> {
    return this.http.delete(`${baseUrl}/${phoneNumber}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
