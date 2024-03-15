import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
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
  // The Number of Items in your Paginated Collection
  // Page Numbers are calculated dynamically based on collectionSize and pageSize
  collectionSize: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // Getting all the Employees Data & Implementing Pagination
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

  // View all Employee Details Modal
  employeeDetails(id: any) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      const modalRef = this.modal.open(EmployeeDetailsComponent, {
        size: 'sm',
      });
      modalRef.componentInstance.employeeDetails = data;
    });
  }

  // Update employee details view
  updateEmployee(id: any) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      const modalRef = this.modal.open(CreateEmployeeComponent, {
        size: 'lg',
      });
      modalRef.componentInstance.employeeDetails = data;
      modalRef.componentInstance.updateMode = true;
    });
  }

  // Delete Employee Details functionality
  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      const modalRef = this.modal.open(DeleteConfirmationComponent, {
        size: 'lg',
      });
      modalRef.componentInstance.employeeDetails = data;
    });
  }

  //NgbPagination Module
  onPageChange(event: number) {
    this.page = event;
    this.getEmployees();
  }
}
