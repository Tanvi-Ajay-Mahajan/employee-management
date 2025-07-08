import { Routes } from '@angular/router';

import { NotFound } from './not-found/not-found';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeForm } from './employee-form/employee-form';

export const routes: Routes = [
  {
    //defult route
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    //if empolyee list needed
    path:'list',
    component: EmployeeList,
    title:'Emp List'
  },
  {
    //if new empolyee enter
    path :'new-employee',
    component:EmployeeForm
  },
  {
    //if user enter is nit found
    path:"**",
    component:NotFound
  }
];
