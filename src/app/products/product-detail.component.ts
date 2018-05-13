import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product.interface';
import { ProductService } from '../services/products.service';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _products: ProductService) { }

  ngOnInit() {
    let id = +this._activatedRoute.snapshot.paramMap.get('id');
    this._products.getProductWithId(id.toString()).subscribe(
      returnedProduct => this.product = returnedProduct,
      error => console.log(error));
    }

    onBack(): void {
      this._router.navigate(['/products']);
    }
  }


