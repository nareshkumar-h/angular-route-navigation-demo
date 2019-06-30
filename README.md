## Routing and Navigation

#### Prerequisite:
* Create a Project with routing

#### Step 1 : Create Components for Product
```
ng generate component list-product
ng generate component view-product
ng generate component delete-product
```

#### Step 2 : Add routes in app-routing.module.ts
```
const routes: Routes = [
    { path: 'listproducts',      component: ListProductComponent },
    { path: 'viewproduct/:id',      component: ViewProductComponent },      
    { path: 'deleteproduct/:id',      component: DeleteProductComponent },
    { path: '**', component: ListProductComponent }
];
```

#### Step 3: Implement List Products
* list-product.component.ts
```
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
```

* list-product.component.ts
```
<table border="1" *ngIf="products.length>0">
    <thead><tr><th>Sno</th><th>Product Name</th><th>Price</th></tr></thead>
    <tbody *ngFor="let p of products">
        <tr><td>{{p.id}}</td><td>{{p.name}}</td><td>{{p.price}}</td>
           <td><a routerLink="../viewproduct/{{p.id}}" class="btn btn-primary" >Edit</a></td> 
            <td><a routerLink="../deleteproduct/{{p.id}}" class="btn btn-danger">Delete</a></td>
           
        </tr>
   </tbody>
</table>
```

#### Step 4: Implement View Product
* view-product.component.ts
 * Get Route Params (Get Product Id)
```
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
```
* view-product.component.html
```
<h3> View Product</h3>

Product Id : {{productId}}

<br/>
<button (click)="update()"> Update </button>
```
* Note: When we click update button, it should navigate to list products page.

#### Step 5: Delete Component 
* deleteproduct-component.ts
```
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
```
* deleteproduct-component.html
```
<h3> Delete Product</h3>

Product Id : {{productId}}

<button (click)="delete()"> Delete </button>
```


