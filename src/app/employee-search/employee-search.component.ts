import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  searchTerm: string = '';
  employees = this.employeeService.getEmployees();

  constructor(private employeeService: EmployeeService) {}

  onSearch(): void {
    this.employees = this.employeeService.searchEmployees(this.searchTerm);
  }
}
