import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId:number;
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe( (params)=>{
      this.productId = params['id'];
     console.log('Delete Product:' + this.productId);
    });
  }

  ngOnInit() {
  }

  delete(){
    this.router.navigate(["listproducts"]);
  }


}
