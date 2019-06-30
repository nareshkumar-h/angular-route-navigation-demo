import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
    { path: 'listproducts',      component: ListProductComponent },
    { path: 'viewproduct/:id',      component: ViewProductComponent },      
    { path: 'deleteproduct/:id',      component: DeleteProductComponent },
    { path: '**', component: ListProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
