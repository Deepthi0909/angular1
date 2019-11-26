import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { CustomerModel } from '../models/customer-model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
        
  @Input() CustomerList : CustomerModel[];
  selectedCustomert : CustomerModel;
  @Output() selectCustomerEvent = new EventEmitter<CustomerModel>();

  customerList:CustomerModel[] = [];
  constructor(
    private router:Router,
    private service:CustomerService
  ) { }

  ngOnInit() {

    // this.customerList.push(new CustomerModel('111','hpe','radha','banglore','india'));
    // this.customerList.push(new CustomerModel('222','canarys','prathyusha','banglore','india'));
    // this.customerList.push(new CustomerModel('333','ndt','tulasi','chenai','india'));
   // console.log(this.customerList);
   this.service.getAll().subscribe(data=> this.customerList = data);
   
  }
  
  
goBack() {
  this.router.navigate(['/admin']);
}
getAll()
{
  this.getAll();
}
select(value){
  this.selectCustomerEvent.emit(value);
}
}