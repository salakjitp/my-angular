import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { SharingDataComponent } from './sharing-data/sharing-data.component';
import { Children1Component } from './sharing-data/children1/children1.component';
import { Children2Component } from './sharing-data/children2/children2.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ElementRefComponent,
    SharingDataComponent,
    Children1Component,
    Children2Component,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  // import HttpClientModule after BrowserModule.
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
