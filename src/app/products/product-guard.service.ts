import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if(!id || id < 1) {
      alert('wrong product id');
      this._route.navigate(['/products']);
      return false;
    }
    return true;
  }

  constructor(private _route: Router) { }

}
