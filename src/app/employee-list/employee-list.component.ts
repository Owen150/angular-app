import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  constructor(private employeeService: EmployeeService,  private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // Getting Data from an Observable - Subscribe
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  // Navigate to Employee Details Component
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  // Navigate to Update Employee Component
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  // Delete Employee - No Component Exists therefore perform action directly
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
