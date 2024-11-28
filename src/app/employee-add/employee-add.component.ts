//here is the logic for adding a new employee.
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employee: Employee = {
    id: 0,
    name: '',
    companyName: '',
    email: '',
    contactNo: '',
    designation: 'Software Developer',
    avatar: 'avatar1.png'
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit() {
    this.employee.id = Date.now(); // TO Create unique ID
    this.employeeService.addEmployee(this.employee);
  }
}
