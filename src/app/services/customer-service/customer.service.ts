import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  addCustomer(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/customers',data);
  }
  getCustomerList():Observable<any>{
    return this._http.get('http://localhost:3000/customers');
  }
  deleteCustomer(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/customers/${id}`)
  }
  updateCustomer(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/customers/${id}`,data);
  }

}