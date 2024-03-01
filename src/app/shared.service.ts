import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  calculate(firstNum:number, secondNum:number) {
    return firstNum + secondNum;
  }

}