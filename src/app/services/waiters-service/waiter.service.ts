import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  constructor(private _http: HttpClient) { }

  addWaiter(data:any):Observable<any>{
    return this._http.post('https://test-api-6am6.onrender.com/waiters',data);
  }
  getWaiterList():Observable<any>{
    return this._http.get('https://test-api-6am6.onrender.com/waiters');
  }
  deleteWaiter(id:number):Observable<any>{
    return this._http.delete(`https://test-api-6am6.onrender.com/waiters/${id}`)
  }
  updateWaiter(id:number,data:any):Observable<any>{
    return this._http.put(`https://test-api-6am6.onrender.com/waiters/${id}`,data);
  }
}
