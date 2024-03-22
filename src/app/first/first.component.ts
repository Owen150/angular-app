import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  firstNum = 0;
  secondNum = 0;
  output = 0;

  constructor(private router: Router){}

  calculate() {
    let sharedService = new SharedService();
    this.output = sharedService.calculate(this.firstNum, this.secondNum);
  }

  next() {
    this.router.navigate(['second']);
  }
}
