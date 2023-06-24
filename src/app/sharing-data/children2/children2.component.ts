import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.scss']
})
export class Children2Component {
  @Input() childrenItem : any = null;

}
