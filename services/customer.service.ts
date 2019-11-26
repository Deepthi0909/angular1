import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CustomerModel } from '../models/customer-model';
import { environment as ENV } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList:CustomerModel[]=[];

  constructor( private http: HttpClient ) { 

    // this.customerList.push(new CustomerModel('111','hpe','radha','banglore','india'));
    // this.customerList.push(new CustomerModel('222','canarys','prathyusha','banglore','india'));
    // this.customerList.push(new CustomerModel('333','ndt','tulasi','chenai','india'));
  }
  getAll(){
    //return this.customerList;
    return this.http.get<CustomerModel[]>(ENV.customerUrl);
    // returns and observable<CustomerModel> list
  }
  getAllDetails(customerId:string)
  {
  return this.http.get<CustomerModel>(`${ENV.customerUrl}/${customerId}`);
  }
  create(item: CustomerModel){
    var body=JSON.stringify(item);
    var url=`${ENV.customerUrl}/${item.CustomerID}`;
    var headers= new HttpHeaders({
      "content-Type":"application/json"
    })
    return this.http.post<CustomerModel>(url,body,{headers:headers});
 
  
  }
  update(item:CustomerModel){
  var body=JSON.stringify(item);
  var url=`${ENV.customerUrl}/${item.CustomerID}`;
  var headers= new HttpHeaders({
    "content-Type":"application/json"
  })
  return this.http.put<CustomerModel>(url,body,{headers:headers});
 }
}
