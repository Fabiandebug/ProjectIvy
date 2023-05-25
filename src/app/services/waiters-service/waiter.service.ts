import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  constructor(private _http: HttpClient) { }

  addWaiter(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/waiters',data);
  }
  getWaiterList():Observable<any>{
    return this._http.get('http://localhost:3000/waiters');
  }
  deleteWaiter(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/waiters/${id}`)
  }
  updateWaiter(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/waiters/${id}`,data);
  }
}
