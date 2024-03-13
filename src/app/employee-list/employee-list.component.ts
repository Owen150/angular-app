import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  isFormVisible: boolean = false;
  selectedEmployee!: Employee;

  id!: number;
  // The Number of Items Per Page
  pageSize = 3;
  //The Current Page
  page = 1;
  //The Number of Items in your Paginated Collection
  collectionSize: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // Getting Data from an Observable - Subscribe
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      // return (this.employees = data);
      this.collectionSize = data.length;
      this.employees = data.slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      );
    });
  }

  // Show Employee Details Modal
  employeeDetails(id: number) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      const modalRef = this.modal.open(EmployeeDetailsComponent, {
        size: 'sm',
      });
      modalRef.componentInstance.employeeDetails = data;
    });
  }

  showForm(employee: Employee) {
    this.selectedEmployee = employee;
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
    this.selectedEmployee = this.employee;
  }

  handleFormSubmission() {
    this.hideForm();
    this.getEmployees(); // Reload employee list after form submission
  }

  // Navigate to Update Employee Component
  updateEmployee(id: any) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      const modalRef = this.modal.open(CreateEmployeeComponent, {
        size: 'lg',
      });
      modalRef.componentInstance.employeeDetails = data;
      modalRef.componentInstance.updateMode = true;
    });
  }

  // Delete Employee Functinality
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      const modalRef = this.modal.open(DeleteConfirmationComponent, {
        size: 'lg',
      });
      modalRef.componentInstance.employeeDetails = data;
    });
  }

  // Initialize a new Employee Object from the Employee Model
  employee: Employee = new Employee();

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

  //NgbPagination Module
  onPageChange(event: number) {
    this.page = event;
    this.getEmployees();
  }
}
