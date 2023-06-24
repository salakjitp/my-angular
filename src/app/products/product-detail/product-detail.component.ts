import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private apppp: AppService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params:any) => {
        console.log(params); // { id: "1" }

        // params.id
      }
    );
  }

}
