import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../model/IEmployee';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
