import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmployee} from '../model/IEmployee';

@Injectable({
    providedIn: 'root'
  })
  
export class EmployeeService 
{
    _url : string = "http://localhost:8088/retrive";
    //data : Observable<any> ;
   employeeDetails: any;
    constructor(private http: HttpClient) { }

    ngOnInit() 
    {

    }

    getEmployeeData() : Observable<IEmployee[]>
    {
    //     this._url= this._url + '/retrive';
         return this.http.get<IEmployee[]>(this._url);
    }

    addEmployeeData(user : IEmployee) : Observable<IEmployee[]>
    {
        return this.http.post<IEmployee[]>(this._url,user);
    }
}
