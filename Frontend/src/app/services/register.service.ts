import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { register } from '../model/register'


@Injectable()

export class RegisterService {

  private dataUrl = 'http://localhost:3000/register';

  constructor(private http: Http) { }

  saveRegisterData(obj: register): Observable<register[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.dataUrl + '/saveRegister', { 'data': obj }, options)
      .pipe(map((res: Response) => res.json()));
  }

  getRegisterData(): Observable<register[]> {
    return this.http.get(this.dataUrl + '/getRegister')
      .pipe(map((res: Response) => res.json()));
  }

  saveLoginData(obj: register): Observable<any> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });

    return this.http.post(this.dataUrl + '/signin', obj, options)
      .pipe(map((res: Response) => res.json()));

  }

}
