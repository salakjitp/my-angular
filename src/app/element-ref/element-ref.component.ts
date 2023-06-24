import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.scss']
})
export class ElementRefComponent implements OnInit, AfterViewInit {
  @ViewChild('elementClick', { static: false }) elementClickEL!: ElementRef;
  @ViewChild('elementToggle', { static: false }) elementToggleEL!: ElementRef;


  isElementToggle : boolean = false;
  isElementClicked : boolean = false;

  ngOnInit(): void {
    (window as any)._demoComp = this;
  }

  ngAfterViewInit(): void {

    if (this.elementClickEL != null) {
     // Create the event.
     // const event = document.createEvent('Event');
     // // Define that the event name is 'build'.
     // event.initEvent('change', true, true);
     // Listen for the event.
     this.elementClickEL.nativeElement.addEventListener('click', (evt: any) => {
       console.log('elementClickEL.nativeElement', evt);
       this.isElementClicked = true;
     }, false);
   }

   if (this.elementToggleEL != null) {
     this.elementToggleEL.nativeElement.addEventListener('click', (evt: any) => {
       console.log('elementToggleEL.nativeElement', evt);
       this.isElementToggle = !this.isElementToggle;
     }, false);
   }
 }
}
