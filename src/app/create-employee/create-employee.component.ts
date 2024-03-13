import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  // Initialize a new Employee Object from the Employee Model
  employee: Employee = new Employee();
  @Input() employeeDetails!: any;
  updateMode: boolean = false;

  // Inject the Employee Service, the Router, and the active modal
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  // On Submitting the Create Employee Form - Log the Employee Data then proceed to save it.
  onSubmit(myForm: any) {
    //A conditional function that checks validity of the form and if the update mode is on or off
    if (this.updateMode && myForm.valid) {
      console.log(myForm.value);
      console.log(this.employeeDetails.id);
      this.employeeService
        .updateEmployee(this.employeeDetails.id, myForm.value)
        .subscribe((data) => data);
    } else if (!this.updateMode && myForm.valid) {
      console.log(myForm.value);
      this.employeeService
        .createEmployee(myForm.value)
        .subscribe((data) => data);
    }
    myForm.reset();
    this.activeModal.close();
  }

}
