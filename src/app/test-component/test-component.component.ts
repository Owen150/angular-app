import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  firstName = 'Michael';
  imagepath = 'assets/doom.jpg';
  defaultValue = 'Wednesday';

  passValueToComponent(e: any) {
    console.log(e.target.value);
  }
}
