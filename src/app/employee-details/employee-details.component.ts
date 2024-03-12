import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

import { inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  constructor(public activeModal: NgbActiveModal){}
  @Input() employeeDetails!: any;
  // employee!: Employee;

  // constructor(
  //   private route: ActivatedRoute,
  //   private employeService: EmployeeService
  // ) {}

  // // On Component Initialization Show Employee Details by Passing the Employee ID as a parameter
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];
  //   this.employee = new Employee();

  //   this.employeService.getEmployeeById(this.id).subscribe((data) => {
  //     this.employee = data;
  //   });
  // }
}
