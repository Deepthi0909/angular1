import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerModel } from '../models/customer-model';
 
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
 
  constructor(
     private service: CustomerService,
     private activeRoute: ActivatedRoute
  ) { }
  @Input() model: CustomerModel;
 
  ngOnInit() {
    let selectedId = this.activeRoute.snapshot.params.id;
    this.service.getAllDetails(selectedId).subscribe(data=>this.model=data);
  }
  diagnostic(){
    return JSON.stringify(this.model);
  }
 

}

 


