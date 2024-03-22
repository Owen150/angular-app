import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  firstNum = 0;
  secondNum = 0;
  output = 0;

  constructor(private router: Router, private sharedService: SharedService) { }
  
  ngOnInit(): void {}

  calculate() {
    this.output = this.sharedService.calculate(this.firstNum, this.secondNum);
    this.sharedService.firstPageValue = this.output;
  }

  next() {
    this.router.navigate(['second']);
  }
}
