import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CustomerModel } from '../models/customer-model';
 
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
 
  constructor(
    private service: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder   
  ) { }
  model: CustomerModel;
  fg: FormGroup;  
 
  ngOnInit() {
     
this.model = new CustomerModel('','','','','');
this.fg = this.fb.group(
{
 customerId: new FormControl(this.model.CustomerID),    //extracting each individual values
 companyName: new FormControl(this.model.CompanyName),
 contactName: new FormControl(this.model.ContactName),
 city: new FormControl(this.model.City),
 country: new FormControl(this.model.Country)
});
 
}
   
get f() { return this.fg.controls; }
 
submit(){
this.model.CustomerID = this.f.customerId.value;     //upon clicking update all values will get
this.model.CompanyName = this.f.companyName.value;    // updated and redirected to list page
this.model.ContactName =this.f.contactName.value;
this.model.City = this.f.city.value;
this.model.Country = this.f.country.value;
this.service.create(this.model).subscribe(() => {
this.router.navigate(['/admin/customers/list']);
});
}
 
}
