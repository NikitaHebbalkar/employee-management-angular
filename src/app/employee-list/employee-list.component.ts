//To display all employees with options to view, edit, and delete.
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  // Navigate to View Employee
  viewEmployee(id: number): void {
    this.router.navigate(['/employee/view', id]);
  }

  // Navigate to Edit Employee
  editEmployee(id: number): void {
    this.router.navigate(['/employee/edit', id]);
  }

  // Delete Employee with confirmation
  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id);
      this.employees = this.employeeService.getEmployees(); // Refresh the list
    }
  }
}
