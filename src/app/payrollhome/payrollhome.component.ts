import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payrollhome',
  templateUrl: './payrollhome.component.html',
  styleUrls: ['./payrollhome.component.scss']
})
export class PayrollhomeComponent implements OnInit {

  constructor() { }
  isCheck : boolean = false;
  ngOnInit(): void {
  }


  payrollHeader() : void {
    this.isCheck = true;
  }
}
