import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  //# Case 1 @Input()
  @Input() productList: Product[] = []; // decorate the property with @Input()

  //# Case 2 @Input() and set
  @Input()
  set productList2(_list : Product[]) {
    this.products = _list
  }
  public products!: Product[] ;

  constructor(){
  }

  ngOnInit(): void {
    (window as any)._productList = this;
  }

}
