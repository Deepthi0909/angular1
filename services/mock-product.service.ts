import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

const productList = [
  new ProductModel(101, 'Markers',100,100,1,false),
  new ProductModel(102, 'Pens',200,110,2,false),
  new ProductModel(103, 'Pencils',300,120,1,true),
  new ProductModel(104, 'rubers',400,130,2,false),
  new ProductModel(105, 'Books',500,140,1,true),

];

@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  constructor() { }

  getAllProducts(){
    return productList
  }
  getDetails(productId: number){
    return productList.find(c=>c.ProductId===productId);
  }
  create(item: ProductModel){
      if(item) {
        let count=productList.length+1;
        item.ProductId=count;
        productList.push(item);
      }
      
  
  }
   update(item: ProductModel){
    var pro=productList.find(c=>c.ProductId===item.ProductId)
    {
      pro.ProductName=item.ProductName;
      pro.UnitPrice=item.UnitPrice;
      pro.UnitsInStock=item.UnitsInStock;
      pro.CategoryId=item.CategoryId;
      pro.Discontinued=item.Discontinued;
 
    }
  }
  }

