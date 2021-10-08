import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl ,FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IEmployee } from '../model/IEmployee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-payrollhome',
  templateUrl: './payrollhome.component.html',
  styleUrls: ['./payrollhome.component.scss']
})
export class PayrollhomeComponent implements OnInit {
  
  isCheck : boolean = false;
    
  constructor(private fb : FormBuilder,private service : EmployeeService,public dialog : MatDialog) { }
  
  

  
  ngOnInit(): void 
  {
  //   console.log( this.user.employees.values.name);
  }

  payrollHeader() : void 
  {
    this.isCheck = true;
  }

  onSubmit()
  {

  }
}
