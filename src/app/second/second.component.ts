import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  firstNum = 0;
  secondNum = 0;
  output = 0;
  previousPageVal = 0;

  constructor(private router: Router){}

  ngOnInit(): void{}
  calculate() {
    let sharedService = new SharedService();
    this.output = sharedService.calculate(this.firstNum, this.secondNum);
    this.previousPageVal = sharedService.firstPageValue;
  }

  previous() {
    this.router.navigate(['first']);
  }
}
