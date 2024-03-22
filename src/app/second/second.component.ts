import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  firstNum = 0;
  secondNum = 0;
  output = 0;

  constructor(private router: Router){}

  calculate() {
    this.output = this.firstNum + this.secondNum;
  }

  previous() {
    this.router.navigate(['second']);
  }
}
