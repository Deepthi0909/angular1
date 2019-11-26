import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { MockProductService } from '../services/mock-product.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  //  listOfProducts:ProductModel[];
  // selectedProduct: ProductModel;

  constructor(
   // private service:MockProductService
  ) { }

  ngOnInit() {
  }

}
