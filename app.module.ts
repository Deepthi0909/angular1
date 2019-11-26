import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule,Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductHomeComponent } from './products/product-home.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductCreateComponent } from './products/product-create.component';
import { ProductUpdateComponent } from './products/product-update.component';
import { PageNotFoundComponent } from './ui/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './Auth/login.component';
import { ContactRoutingModule } from './contact/contact-routing.module';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  { path: "products",component: ProductHomeComponent},
  { path: "login",component:LoginComponent},
  { path: "" ,redirectTo: "/home",pathMatch:"full"},
  { path: "**",component:PageNotFoundComponent}
];
/* Routes: /[home],/[Products], /[],/[something] */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductHomeComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContactRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
