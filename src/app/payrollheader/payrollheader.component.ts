import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../model/IEmployee';
@Component({
  selector: 'app-payrollheader',
  templateUrl: './payrollheader.component.html',
  styleUrls: ['./payrollheader.component.scss']
})
export class PayrollheaderComponent implements OnInit {

  employees : IEmployee[] = [] ;
  constructor(private employeeService : EmployeeService) { }  
  
  ngOnInit(): void 
  {
      this.employeeService.getEmployeeData().subscribe(data => {
        this.employees = data;
      });
  }

  addEmployeeDetails(user : IEmployee)
  {
      this.employeeService.addEmployeeData(user).subscribe( data => {
          console.log('Data added successfully:');
          return this.employees.push(user);
      });
  }
}


