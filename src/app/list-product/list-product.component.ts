import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor() { }

  products=[];
  
  ngOnInit() {
    this.listProducts();
  }

  listProducts(){
    this.products =  [ {"id":1,"name":"MAC","price":1000},
    {"id":2,"name":"Lenova","price":500}];    
  }
}
