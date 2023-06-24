import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { SharingDataComponent } from './sharing-data/sharing-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ElementRefComponent } from './element-ref/element-ref.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'sharing-data',
    component: SharingDataComponent
  },
  {
    path: 'element-ref',
    component: ElementRefComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
