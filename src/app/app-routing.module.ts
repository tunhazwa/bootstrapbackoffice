import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import {ConfigurationsComponent} from './configurations/configurations.component';

const routes: Routes = [
  {path:'dashboards', component:DashboardComponent},
  {path:'employees', component:EmployeeComponent},
  {path:'configurations', component:ConfigurationsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
