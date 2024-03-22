import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent  {

  @Input() employeeDetails!: any;

 myForm!:NgForm
  id!: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  // On Form Initialization, display Individual Employee Data using the Employee ID
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];

  //   this.employeeService.getEmployeeById(this.id).subscribe(data => {
  //     this.employee = data;
  //   }, error => console.log(error));
  // }

  onSubmit(myForm: NgForm) {
    this.employeeService.updateEmployee(this.employeeDetails.id, myForm.value).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}