import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  items: any[] = [];

  onItemAdded(newItem: any) {
    this.items.push(newItem);
  }
}
