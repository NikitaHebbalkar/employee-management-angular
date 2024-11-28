import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components here
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

// Defining the routes
const routes: Routes = [
  {{ path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: 'edit/:id', component: EmployeeEditComponent },
  { path: 'view/:id', component: EmployeeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Setup routing with the routes
  exports: [RouterModule]  // Export RouterModule so that it can be used in other modules .
})
export class AppRoutingModule { }
