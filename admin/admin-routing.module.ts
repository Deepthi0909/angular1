import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from "@angular/router";
import { CustomerHomeComponent } from './customer-home.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerCreateComponent } from './customer-create.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerUpdateComponent } from './customer-update.component';
import { AdminHomeComponent } from './admin-home.component';
import { AuthGuard } from '../Auth/auth.guard';

const routes:Routes=[
  {
    path:"admin",
    canActivate:[AuthGuard],
    children:[
      { path: "customers",component:CustomerHomeComponent},
      { path: "customers/list",component:CustomerListComponent},
      { path: "customers/new",component:CustomerCreateComponent},
      { path: "customers/:id",component:CustomerDetailsComponent},
      { path: "customers/edit/:id",component:CustomerUpdateComponent},
      { path: "",component:AdminHomeComponent}

    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
