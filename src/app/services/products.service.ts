import { IProduct } from '../products/product.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
  private productUrl = 'http://172.19.199.129:8080/products.json';
  private productWithIdUrl = 'http://172.19.199.129:8080/product';

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productUrl)
    .do(products => console.log(JSON.stringify(products)))
    .catch(this.errorHappened);
  }

  getProductWithId(id: string): Observable<IProduct> {
    return this._http.get<IProduct>(this.productWithIdUrl + id +'.json')
    .do(product => console.log(JSON.stringify(product)))
    .catch(this.errorHappened);
  }

  errorHappened(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error);
  }

}