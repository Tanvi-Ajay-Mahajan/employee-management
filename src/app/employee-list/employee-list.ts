import { Component,Input,OnInit, inject } from '@angular/core';
import { IEmployeeList } from '../model/employee';
import { employeeServices } from '../services/employee';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports : [DatePipe , CommonModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeList implements OnInit {
@Input() employeeList: IEmployeeList[] = [];

  empServices = inject(employeeServices);
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
  this.empServices.getAllEmployees().subscribe(
    (res: any) => {
      this.employeeList = res;
    });
  }

 constructor(private employeeService: employeeServices) {}

deleteEmployee(id: number) {
  this.employeeService.deleteEmployee(id).subscribe({
    next: () => {
      alert("Employee deleted");
      this.getEmployee(); // refresh list
    },
    error: (err) => {
      console.error("Error deleting employee:", err);
    }
  });
}

}
