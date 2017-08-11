import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product, Shop } from './shop';

@Injectable()
export class StoremeService {
  private apiURL = 'api/shops';

  constructor(private _http: Http) {}

  getShops(): Observable<Shop[]> {
    console.log('Shops is loaded!');
    return this._http
               .get(this.apiURL)
               .map(res => res.json().data as Shop[])
               .catch(this.handleError);
  }

  setShop(oldID: number, shop: Shop) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiURL}/${oldID}`;

    console.log('Shop with id: ' + oldID + ' replaced by this store:', shop);

    return this._http
               .put(url, JSON.stringify(shop), options)
               .catch(this.handleError);
  }

  createShop(shop: Shop) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    console.log('Shop created!', shop);

    return this._http
               .post(this.apiURL, shop, options)
               .map(res => res.json().data as Shop)
               .catch(this.handleError);
  }

  deleteShop(shop: Shop) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiURL}/${shop.id}`;

    console.log('Shop deleted!', shop);

    return this._http
               .delete(url, options)
               .catch(this.handleError);
  }

  createProduct(shop: Shop) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    console.log('Product is created');

    return this._http
               .put(
                 `${this.apiURL}/${shop.id}`,
                 JSON.stringify(shop),
                 options
               )
               .catch(this.handleError);
  }

  deleteProduct(shop: Shop) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiURL}/${shop.id}`;

    console.log('Product is deleted!');

    return this._http
               .put(url, JSON.stringify(shop), options)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Error', error);
    return Observable.throw(error.message || error);
  }

  getLoacation(shop: string): Observable<any> {
    const api = 'https://maps.googleapis.com/maps/api/geocode/json?';
    const address = 'address=' + shop;
    const key = '&key=AIzaSyDOboylNx9pht9dkBEBvI04HdP8AfJOL-M';
    const url = api + address + key;

    return this._http
               .get(url)
               .map(res => res.json())
               .catch(this.handleError);
  }
}
