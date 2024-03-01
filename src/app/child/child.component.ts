import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  myShop = 'aspire';

  @Output()
  sendMessageEmitter = new EventEmitter();

  sendMessageToParent(e:any) {
    this.sendMessageEmitter.emit(e.target.value);
  }
}
