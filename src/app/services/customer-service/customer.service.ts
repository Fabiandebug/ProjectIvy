import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  addCustomer(data:any):Observable<any>{
    return this._http.post('https://test-api-6am6.onrender.com/customers',data);
  }
  getCustomerList():Observable<any>{
    return this._http.get('https://test-api-6am6.onrender.com/customers');
  }
  deleteCustomer(id:number):Observable<any>{
    return this._http.delete(`https://test-api-6am6.onrender.com/customers/${id}`)
  }
  updateCustomer(id:number,data:any):Observable<any>{
    return this._http.put(`https://test-api-6am6.onrender.com/customers/${id}`,data);
  }

}
