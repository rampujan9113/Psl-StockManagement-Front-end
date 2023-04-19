import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stockin } from 'app/class/stockin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpclient:HttpClient) { }
  
  baseUrl:String="http://localhost:1019/StockInInventory";

  baseUrl2:String="http://localhost:1019/logistics";

  getAllStock():Observable<Stockin[]>{
    return this.httpclient.get<Stockin[]>(`${this.baseUrl}/inventory/item`)
  }

  getByIdProduct(id:any){
  return  this.httpclient.get(`${this.baseUrl}/${id}`)
  }
  postData(data:any){
    return this.httpclient.post(`${this.baseUrl}/add/inventory`,data)
  }


  getAllLogistics():Observable<Stockin[]>{
    return this.httpclient.get<Stockin[]>(`${this.baseUrl2}/gell`)
  }

}
