import { Component, OnInit } from '@angular/core';
import { PayrollheaderComponent } from '../payrollheader/payrollheader.component';
@Component({
  selector: 'app-payrollhome',
  templateUrl: './payrollhome.component.html',
  styleUrls: ['./payrollhome.component.scss']
})
export class PayrollhomeComponent implements OnInit {

  constructor() { }
  
  isCheck : boolean = false;
  
  ngOnInit(): void 
  {
  //   console.log( this.user.employees.values.name);
  }

  payrollHeader() : void 
  {
    this.isCheck = true;
  }

}
