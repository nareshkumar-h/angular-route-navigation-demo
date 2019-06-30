import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId: number;
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe( (params)=>{
      this.productId = params['id'];
     console.log('View Product:' + this.productId);
    });
  }

  ngOnInit() {
  }

  update(){
    this.router.navigate(["listproducts"]);
  }

}
