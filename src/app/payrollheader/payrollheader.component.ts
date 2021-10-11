import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../model/IEmployee';
import { Router } from '@angular/router';
import { userEntity } from '../model/user-model';

@Component({
  selector: 'app-payrollheader',
  templateUrl: './payrollheader.component.html',
  styleUrls: ['./payrollheader.component.scss']
})
export class PayrollheaderComponent implements OnInit {

  employees : IEmployee[] = [] ;
  userModel : userEntity;

  constructor(private employeeService : EmployeeService,private router : Router) { }  
   employeepost : IEmployee;
  //this.employess
  ngOnInit(): void 
  {
      this.employeeService.getEmployeeData().subscribe(employees => {
        console.log(employees);
        this.employees = employees['data'];

      });
  }

  addEmployeeDetails(user : any)
  {
      this.employeeService.addEmployeeData(user).subscribe( data => {
          console.log(data);
     });

  }

  remove(employeeid : number)
  {
    console.log(employeeid);
    this.router.navigateByUrl('details');
    this.employeeService.deleteEmployeeData(employeeid).subscribe(employees => {
      console.log(employees);
    });      

  }

  updateEmployee(id : number , user : userEntity)
  {
      this.router.navigate(['update',id]);
     
  }
}


