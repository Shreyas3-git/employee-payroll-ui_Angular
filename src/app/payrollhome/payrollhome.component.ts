import { Component, OnInit } from '@angular/core';
import { userEntity } from '../model/user-model';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payrollhome',
  templateUrl: './payrollhome.component.html',
  styleUrls: ['./payrollhome.component.scss']
})
export class PayrollhomeComponent implements OnInit {
  
  isCheck : boolean = false;
  userModel = new userEntity({
        
    "id": 11,
    "employeeName": '',
    "employeeGender": '',
    "employeeDepartment": '',
    "employeeSalary":'',
    "employeeStartDate": new Date(''),
    "employeeNotes": '',
    "profilePic": ''  });
  id : string;  
  employeeData : any;
  
  
  constructor(private service : EmployeeService,private route : ActivatedRoute,private router : Router) { }
 
  ngOnInit(): void 
  {
      this.route.paramMap.subscribe(mapEmployee => {
        this.id = mapEmployee.get("id");

        this.service.getEmployeeData().subscribe(data => {
            this.employeeData = data['data'];
            for(let index = 0; index < this.employeeData.length; index++)
            {
                if(this.employeeData[index].id == parseInt(this.id))
                {
                    this.userModel = new userEntity(this.employeeData[index]);
                }
            }
        });
      });


  }

  payrollHeader() : void 
  {
    this.isCheck = true;
  }

  onSubmit(value)
  {
    
      let userObject =  {
        id: 1,
        "employeeName": value.name,
        "employeeGender": value.gender,
        "employeeDepartment": value.department,
        "employeeSalary": value.salary,
        "employeeStartDate": new Date(value.Year + '-' +value.Day + '-' + value.Month),
        "employeeNotes": value.Notes,
        "profilePic": value.profile
    }    


    console.log(value,userObject);
    this.service.addEmployeeData(userObject).subscribe( data => {
      console.log(data);
      this.router.navigate(['details']);
 });

  }

  onUpdate()
  {
      this.service.updateEmployee(parseInt(this.id),this.userModel).subscribe(data => {
        console.log(data);
      }

      )
  }
}
