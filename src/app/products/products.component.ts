import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, delay } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  public currentProducts : Product[] = [];

  constructor(private appService: AppService){
  }

  ngOnInit(): void {
    // this.appService.getProducts()
    //     .subscribe(res => {
    //       this.currentProducts = res.products
    //       console.log('this.products',this.currentProducts)
    //     })

    this.getProductList();
  }

  private getProductList() : Observable<any> {
    const subject: Subject<any> = new Subject();

    this.appService.getProducts()
    .pipe(debounceTime(5000),delay(Math.random() * 10000))
    .subscribe(res=>{
      this.currentProducts = res.products;
    });

    subject.next(true);

    return subject.asObservable();
  }

}
