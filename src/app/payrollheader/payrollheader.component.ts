import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../model/IEmployee';
@Component({
  selector: 'app-payrollheader',
  templateUrl: './payrollheader.component.html',
  styleUrls: ['./payrollheader.component.scss']
})
export class PayrollheaderComponent implements OnInit {

  employees : any = [] ;
  constructor(private employeeService : EmployeeService) { }  
  
  ngOnInit(): void 
  {
      this.employeeService.getEmployeeData().subscribe(employees => {
        console.log(employees);
        this.employees = employees.data;

      });
  }

  addEmployeeDetails(user : IEmployee)
  {
      this.employeeService.addEmployeeData(user).subscribe( data => {
          console.log('Data added successfully:');
          // this.employees.push(user);
      });
  }
}


