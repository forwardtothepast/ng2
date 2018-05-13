import { NgModule } from '@angular/core';
import { ProductListComponent } from './products-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/products.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }])
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
  ],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }
