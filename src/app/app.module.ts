import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products-list.component';
import { StarComponent } from './star/star.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './welcome.component';
import { ProductGuardService } from './products/product-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
