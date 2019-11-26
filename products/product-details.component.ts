import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 @Input() model: ProductModel;

  constructor() { }

  ngOnInit() {
  }
diagnostic() {
  return JSON.stringify(this.model); //convert object into string
  
}

}
