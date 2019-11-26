import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor() { }

  ngOnInit() {
  }
  
  title = 'product-app';

  obj = { id: 100, name: 'Canarys'};
    
  show() {
    return `ID: ${this.obj.id},Name: ${this.obj.name}`;
  }
  update() {
    this.obj.name='Canarys Automation';
  }

}
