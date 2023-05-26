import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private _http: HttpClient) { }

  addTable(data:any):Observable<any>{
    return this._http.post('https://test-api-6am6.onrender.com/tables',data);
  }
  getTableList():Observable<any>{
    return this._http.get('https://test-api-6am6.onrender.com/tables');
  }
  deleteTable(id:number):Observable<any>{
    return this._http.delete(`https://test-api-6am6.onrender.com/tables/${id}`)
  }
  updateTable(id:number,data:any):Observable<any>{
    return this._http.put(`https://test-api-6am6.onrender.com/tables/${id}`,data);
  }
}
