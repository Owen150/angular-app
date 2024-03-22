import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular CRUD';
  constructor(private modal: NgbModal) {}
  open() {
    const modalReference = this.modal.open(CreateEmployeeComponent, {
      size: 'lg',
    });
  }
}
