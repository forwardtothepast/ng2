import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.interface';
import { ProductService } from '../services/products.service';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';

@Component({
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  productList: IProduct[];
  showImage: boolean = false;
  imageButtonTitle: string = 'Show Image';
  filteredText: string = '';

  constructor(private _productService: ProductService) {
    this.productList = [];
  }

  get productListFilter(): IProduct[] {
    let filteredData: IProduct[]  = [];
    if (this.filteredText) {
       this.productList.forEach(element => {
        if (element.productName.toLowerCase().search(this.filteredText.toLowerCase()) > -1) {
          filteredData.push(element);
        }
      });
    } else {
      filteredData = this.productList;
    }
    return filteredData;
  }

  toggleShowImageHandler(): void {
    this.showImage = !this.showImage;
    this.imageButtonTitle = this.showImage ? 'Hide Image' : 'Show Image';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle.concat(message);
  }

  ngOnInit() {
    console.log('ProductListComponent: ngOnInit: getting product list');
    this._productService.getProducts().subscribe(
      products => this.productList = products,
      error => console.log(error));
  }
}
