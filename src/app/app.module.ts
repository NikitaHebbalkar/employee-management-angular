import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { EmployeeListComponent } from './employee-list'; // Import components
import { EmployeeAddComponent } from './employee-add'; // Import components
import { EmployeeViewComponent } from './employee-view'; // Import components

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeViewComponent, // Declaring components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ // RouterModule is configured with routes
      { path: '', redirectTo: '/employees', pathMatch: 'full' },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'employee/add', component: EmployeeAddComponent },
      { path: 'employee/:id', component: EmployeeViewComponent },
    ]) // Added routing configuration here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
