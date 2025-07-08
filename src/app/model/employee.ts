export class Employee{
  id: number =  1;
  fullName = "";
  email = "";
  phone = "";
  gender = "";
  dateOfJoining = "";
  departmentId = "";
  designationId = "";
  employeeType = "";
  salary = 0;

    constructor(){
      this.id=1;
      this.dateOfJoining='';
      this.departmentId=''
      this.designationId='';
      this.email='';
      this.employeeType='';
      this.fullName='';
      this.phone='';
      this.gender='';
      this.salary=0;
    }

}
export interface IEmployeeList{
    id: number;
    fullName:string;
    phone:string;
    email:string;
    gender:string;
    dateOfJoining:string;
    employeeType: string;
    departmentId:string;
    designationId:string;
    salary:number;
}
export interface IDeparment{

    departmentId: number;
    departmentName: String;

}
export interface IDesignation{
  designationId: number;
  departmentId: number;
  designationName: string;

}
