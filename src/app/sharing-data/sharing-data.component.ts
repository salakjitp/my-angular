import { Component } from '@angular/core';

@Component({
  selector: 'app-sharing-data',
  templateUrl: './sharing-data.component.html',
  styleUrls: ['./sharing-data.component.scss']
})
export class SharingDataComponent {
  public parentItem : any = null;
  public parentItemChild1 : any = null;

  constructor(){
  }

  parentItemEvent(data : any ){
    this.parentItemChild1 = data;

  }
}
