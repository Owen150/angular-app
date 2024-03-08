import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  // Initialize a new Employee Object from the Employee Model
  employee: Employee = new Employee();

  // Inject the Employee Service and the Router
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // On Submitting the Create Employee Form - Log the Employee Data then proceed to save it.
  onSubmit(myForm: any) {
    if (myForm.valid) {
      console.log(this.employee);
      this.saveEmployee();
    }
  }

  // After Successfully Saving the Employee, Navigate to the Employee List Component
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe((data) => {
      console.log(data);
      this.goToEmployeeList();
    });
  }

  // Employee List Component View
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
