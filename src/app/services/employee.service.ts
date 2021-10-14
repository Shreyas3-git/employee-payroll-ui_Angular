import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmployee} from '../model/IEmployee';
import { userEntity } from "../model/user-model";

@Injectable({
    providedIn: 'root'
  })
  
export class EmployeeService 
{
   
    //data : Observable<any> ;
   employeeDetails: any;
    constructor(private http: HttpClient) { }

    ngOnInit() 
    {

    }

    getEmployeeData() : Observable<IEmployee[]>
    {
       let _url  = "http://localhost:8088/retrive";
         return this.http.get<IEmployee[]>(_url);
    }

    addEmployeeData(user : IEmployee) : Observable<any>
    {
        let addUrl = 'http://localhost:8088/insert'
        return this.http.post(addUrl,user);
    }

    deleteEmployeeData(id : number) : Observable<any>
    {
        let removeUrl : string = 'http://localhost:8088/delete/';
        return this.http.delete(removeUrl + id);
    }

   updateEmployee(id : number,user : IEmployee) : Observable<any>
   {
       console.log('service method:');
       console.log(id,user);

       let updateUrl : string = 'http://localhost:8088/update/';
       return this.http.put(updateUrl + id,user);
        // return null;
   } 
    
}
