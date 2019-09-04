import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from '../model/product'

@Injectable({ providedIn: 'root' })

export class ProductService {

  private dataUrl = 'http://localhost:3000/products';

  constructor(private http: Http) { }

  saveProductData(obj: product): Observable<product[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.dataUrl + '/saveProduct', { 'data': obj }, options)
      .pipe(map((res: Response) => res.json()));
  }

  getProductData(): Observable<product[]> {
    return this.http.get(this.dataUrl + '/getProduct')
      .pipe(map((res: Response) => res.json()));
  }

  updateProductData(obj: product): Observable<product[]> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.dataUrl + '/updateProduct', { 'data': obj }, options)
      .pipe(map((res: Response) => res.json()));
  }


  deleteProductData(obj: string): Observable<product[]> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.dataUrl + '/deleteProduct/' + obj, options)
      .pipe(map((res: Response) => res.json()));

  }
}


