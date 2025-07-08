import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IDeparment, IDesignation, IEmployeeList } from '../model/employee';
import { Observable } from 'rxjs';
import { EmployeeList } from '../employee-list/employee-list';

@Injectable({
  providedIn: 'root'
})
export class employeeServices {


  private apiUrl='http://localhost:3000/employees';

  constructor(private http:HttpClient) { }


  getAllEmployees(): Observable<IEmployeeList[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:3000/employees', emp);
  }
    createNewEmpolyee(obj : Employee) :Observable<Employee>{
        return this.http.post<Employee>('http://localhost:3000/employees' , obj);

    }
    getAllDepartment(): Observable<IDeparment[]>{//function
      return this.http.get<IDeparment[]>(`${this.apiUrl}GetDepartments`)
    }

    getDesignationByDepId(depId:number) : Observable<IDesignation[]>{//function
      return this.http.get<IDesignation[]>(`http://localhost:3000/designations?departmentId=${depId}`);

    }
    deleteEmployee(id: number): Observable<any> {
      return this.http.delete(`http://localhost:3000/employees/${id}`);
}

}

export { Employee };

