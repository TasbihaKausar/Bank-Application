import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private baseurl:string='http://localhost:8080'

  constructor(private http:HttpClient) { }

  ngOnInit(){
    
    }

    

  createaccount(data:any){
  console.log(data);
//return this.http.post('${this.baseurl}/create-account',data)
return this.http.post(this.baseurl+"/accounts",data);
  }

  deleteaccount(data:any){
    console.log(data);
    return this.http.get(`${this.baseurl}/accounts/delete/${data}`);
  }

  viewbalance(data:any){
    console.log(data);
    
    return this.http.get(`${this.baseurl}/accounts/${data}`);
  }


  depositaccount(data:any){
    console.log(data);
    return this.http.put(`${this.baseurl}/accounts/${data.accountNumber}/deposit/${data.balance}`,data);
  }

  withdrawaccount(data:any){
    console.log(data);
    return this.http.put(`${this.baseurl}/accounts/${data.accountNumber}/withdraw/${data.balance}`,data);

  }

  transferaccount(data:any){
    console.log(data);
    return this.http.put(`${this.baseurl}/accounts/${data.accountNumber}/transfer/${data.toAccount}/${data.balance}`,data);

  }
  
}
