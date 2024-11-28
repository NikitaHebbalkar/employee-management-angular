//logic to edit employee details.
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee | undefined;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.employee = this.employeeService.getEmployeeById(id);
  }

  // Update Employee
  updateEmployee(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee);
      this.router.navigate(['/']); // Redirect to employee list
    }
  }
}
