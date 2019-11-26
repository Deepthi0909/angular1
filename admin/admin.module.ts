import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer-home.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerCreateComponent } from './customer-create.component';
import { CustomerUpdateComponent } from './customer-update.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerHomeComponent, CustomerListComponent, CustomerDetailsComponent, CustomerCreateComponent, CustomerUpdateComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
