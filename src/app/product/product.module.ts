import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';


@NgModule({
  declarations: [ProductListingComponent, ProductDetailComponent, ProductCategoriesComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
