import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('myForm', {static: true}) myForm:any;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(myForm:any) {
    this.myForm.reset();
  }
}
