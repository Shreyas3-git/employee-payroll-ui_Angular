import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../model/IEmployee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payrollheader',
  templateUrl: './payrollheader.component.html',
  styleUrls: ['./payrollheader.component.scss']
})
export class PayrollheaderComponent implements OnInit {

  employees : IEmployee[] = [] ;
  constructor(private employeeService : EmployeeService,private router : Router) { }  
  //this.employess
  ngOnInit(): void 
  {
      this.employeeService.getEmployeeData().subscribe(employees => {
        console.log(employees);
        this.employees = employees['data'];

      });
  }

  addEmployeeDetails(user : IEmployee)
  {
      this.employeeService.addEmployeeData(user).subscribe( data => {
          console.log(data);

          // this.employees.push(user);
      });
  }

  remove(employeeid : number)
  {
    console.log(employeeid);
    this.router.navigateByUrl('details');
    this.employeeService.deleteEmployeeData(employeeid).subscribe(employees => {
      
    });      

  }
}


