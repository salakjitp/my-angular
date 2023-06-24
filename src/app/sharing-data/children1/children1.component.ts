import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.scss']
})
export class Children1Component {
  @Input() childrenItem : any = null;

  @Output() newItemEvent = new EventEmitter<string>();

  public itemValue : string = "";

  updateItem() {
    this.newItemEvent.emit(this.itemValue);
  }

}
