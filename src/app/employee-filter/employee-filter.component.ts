import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent {
  filterTerm: string = '';
  employees = this.employeeService.getEmployees();

  constructor(private employeeService: EmployeeService) {}

  onFilter(): void {
    this.employees = this.employeeService.filterEmployees(this.filterTerm);
  }
}
