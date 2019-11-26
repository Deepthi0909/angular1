import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { MockProductService } from '../services/mock-product.service';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  listOfProducts:ProductModel[];
  selectedProduct: ProductModel;
  constructor(
    private service:MockProductService //inject the service into this component
  ) { }

  ngOnInit() {
  
  //this.listOfProducts = productList;
  this.listOfProducts=this.service.getAllProducts();
  this.selectedProduct = new ProductModel(0,'',0,0,0,false);
}

select(item: ProductModel) {
  //this.selectedProduct = item;
  this.selectedProduct=this.service.getDetails(item.ProductId);
}
update(item:ProductModel) {
  //TODO: complete the code later
   this.service.update;
  
  //  console.log('Home Component:' ,item);
  //  this.listOfProducts=this.service.getAllProducts();

}
create(item: ProductModel) {
  //pass the item to the service
  this.service.create(item);
  console.log('Home Component: ',item);
  //Update the productlist
  this.listOfProducts = this.service.getAllProducts();
}
remove(item:ProductModel){
  //TODO: complete the code later
}
}
