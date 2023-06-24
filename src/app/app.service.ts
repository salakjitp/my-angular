import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

   }

  getProducts(): Observable<any> {
    const result = this.http.get<any>(`https://dummyjson.com/products`);
    return result;
  }

  getProductsDetail(pid : number): Observable<any> {
    const result = this.http.get<any>(`https://dummyjson.com/products/${pid}`);
    return result;
  }

}
