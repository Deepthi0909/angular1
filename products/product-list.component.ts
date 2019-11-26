import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../models/product-model';





@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

//declare 2 properties
 @Input() productList : ProductModel[];
  selectedProduct : ProductModel;
  @Output() selectProductEvent = new EventEmitter<ProductModel>();

  constructor() { }

   //This is the first event that runs after the constructor is executed.

  ngOnInit() {
    //Initialize the productList and selectedProduct here.
    //this.productList =productList;
    this.selectedProduct = new ProductModel(0,'',0,0,0,false);
  }

  select(value){
    this.selectProductEvent.emit(value);
  }
 
}
