import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Employee, IDeparment, IDesignation } from '../model/employee';
import { FormsModule} from '@angular/forms';
import { employeeServices } from '../services/employee';
import { Observable, ObservableInput } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})

export class EmployeeForm {
  employeeobj: Employee=new Employee();

   @Output() employeeAdded = new EventEmitter<Employee>();

  employeeservices = inject(employeeServices);
  deptList$: Observable<IDeparment[]>=new Observable<IDeparment[]>();
  designationList:IDesignation[]=[];
  employeeServices: any;

  constructor(private http: HttpClient, private router: Router){
    this.deptList$=this.employeeservices.getAllDepartment();

  }

  onSaveEmpolyee(){//api interagtion
    debugger;
      this.employeeservices.addEmployee(this.employeeobj).subscribe(( res : any)=>{
        //subscribe to get api catch
        alert("Employee created")
        this.employeeAdded.emit(res);
        this.router.navigate(['/list']);
      },error=>{
        alert("API Errror" + error.error);
      })

    }

    addEmployee(emp: Employee): Observable<Employee> {
  return this.http.post<Employee>('http://localhost:3000/employees', emp);
}

  employee(arg0: string, employee: any) {
    throw new Error('Method not implemented.');
  }
    getDesignation(){
      this.employeeServices.getDesignationByDepId(this.employeeobj.departmentId).subscribe((res :IDesignation[])=>{
        this.designationList=res;
      })
    }

}

