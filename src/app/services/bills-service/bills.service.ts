import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private _http: HttpClient) { }

  addBill(data:any):Observable<any>{
    return this._http.post('https://test-api-6am6.onrender.com/bills',data);
  }
  getBillList():Observable<any>{
    return this._http.get('https://test-api-6am6.onrender.com/bills');
  }
  deleteBill(id:number):Observable<any>{
    return this._http.delete(`https://test-api-6am6.onrender.com/bills/${id}`)
  }
  getBillItem(id:number):Observable<any>{
    return this._http.get('https://test-api-6am6.onrender.com/bills');
  }
  updateBill(id:number,data:any):Observable<any>{
    return this._http.put(`https://test-api-6am6.onrender.com/bills/${id}`,data);
  }
}
