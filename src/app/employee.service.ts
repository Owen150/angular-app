import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // The EmployeeService will be used to get the data from the backend by calling spring boot APIs

  private baseURL = "http://localhost:3000/employees";

  // Communicate with the Server via the HTTP protocol
  constructor(private httpClient: HttpClient) { }
  
  // Get All Employees
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // Add Employee
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  // Get Employee by ID
  getEmployeeById(id: any){
    // return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  // Update Individual Employee - By ID
  updateEmployee(id: any, employee: Employee){
    return this.httpClient.patch(`${this.baseURL}/${id}`, employee);
  }

  // Delete Individual Employee - By ID
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}