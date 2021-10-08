import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmployee} from '../model/IEmployee';

@Injectable({
    providedIn: 'root'
  })
  
export class EmployeeService 
{
    _url : string = "../jsonData/payrollemployees.json";
    //data : Observable<any> ;
  static employeeDetails: any;
    constructor(private http: HttpClient) { }

    ngOnInit() 
    {

    }

    getEmployeeData() : Observable<IEmployee[]>
    {
         return this.http.get<IEmployee[]>(this._url);
    }

    addEmployeeData(user : IEmployee) : Observable<IEmployee[]>
    {
        return this.http.post<IEmployee[]>(this._url,user);
    }
}
