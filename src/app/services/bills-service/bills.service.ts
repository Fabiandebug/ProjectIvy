import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private _http: HttpClient) { }

  addBill(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/bills',data);
  }
  getBillList():Observable<any>{
    return this._http.get('http://localhost:3000/bills');
  }
  deleteBill(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/bills/${id}`)
  }
  updateBill(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/bills/${id}`,data);
  }
}
