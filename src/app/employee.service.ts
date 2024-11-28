//service to handle operations related to employees like add, edit, delete, search, and filter.
import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // Adding Sample employee data
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Nikita H',
      companyName: 'Tech Corp',
      email: 'Nikita.h@techcorp.com',
      contactNo: '1234567890',
      designation: 'Senior Software Developer',
      avatar: 'assets/avatars/avatar1.png'
    },
    {
      id: 2,
      name: 'Elizabeth Bennet',
      companyName: 'Austen Ltd',
      email: 'Elizabeth.Bennet@Austenltd.com',
      contactNo: '0917654321',
      designation: 'Technical Lead',
      avatar: 'assets/avatars/avatar2.png'
    },
    {
      id: 3,
      name: 'Fitzwilliam Darcy',
      companyName: 'Pemberley Ltd',
      email: 'Darcy@pemberleyltd.com',
      contactNo: '0987054323',
      designation: 'Quality Assurance',
      avatar: 'assets/avatars/avatar3.png'
    },
    {
      id: 4,
      name: 'Jane Bennet',
      companyName: 'Netherfield Ltd',
      email: 'Jane.Bennet@Netherfieldltd.com',
      contactNo: '0987654922',
      designation: 'Software Developer',
      avatar: 'assets/avatars/avatar4.png'
    },
    {
      id: 5,
      name: 'Charles Bingley',
      companyName: 'NetherfieldPark Ltd',
      email: 'Charles.Bingley@NetherfieldParkltd.com',
      contactNo: '0787954922',
      designation: 'Manager',
      avatar: 'assets/avatars/avatar5.png'
    },
  ];

  constructor() {}

  getEmployees(): Employee[] {
    return this.employees; // Return the list of employees
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee); // Add employee to the list
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(employee => employee.id === id);
  }

  updateEmployee(updatedEmployee: Employee) {
    const index = this.employees.findIndex((emp) => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }

  searchEmployees(searchTerm: string) {
    return this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filterEmployees(filterTerm: string) {
    return this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }
}
