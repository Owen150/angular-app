import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  shopNameInParent = "";

  msgFromChild = "";

  receiveMessage(msg:any) {
    this.msgFromChild = msg;
  }
}
