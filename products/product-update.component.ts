import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { ProductModel } from '../models/product-model';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  @Input() model: ProductModel;

  @Output() onupdate=new EventEmitter<ProductModel>();
  constructor() { }

  ngOnInit() {
    this.model = new ProductModel(0,'',0,0,0,false);
  }
  submit(){
    console.log(this.model);
    // Emit event to the parent container,to create or add a new product
    this.onupdate.emit(this.model);
    
  }

}
