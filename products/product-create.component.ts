import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  model: ProductModel;

  @Output() onCreated=new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() {
    this.model = new ProductModel(0,'',0,0,0,false);
  }
submit(){
  console.log(this.model);
  // Emit event to the parent container,to create or add a new product
  this.onCreated.emit(this.model);
  this.model = new ProductModel(0,'',0,0,0,false);
}

}
