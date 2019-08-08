import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../models/constants';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  login(employee: Employee) {
    return this.http.post(Constants.EMPLOYEE_API+'/login',employee,Constants.HTTP_OPTIONS);
  }

  constructor(private http: HttpClient) {}

  addEmployee(employee : Employee){
    return this.http.post(Constants.EMPLOYEE_API+'/add',employee,Constants.HTTP_OPTIONS);
  }
  

  getAllEmployees(){
    return this.http.get(Constants.EMPLOYEE_API+'/all',Constants.HTTP_OPTIONS);
  }
  getAllEmployeee(): Observable<any>{
    return this.http.get(Constants.EMPLOYEE_API+'/all')
  }

  deleteEmployee(employee :Employee){
    return this.http.delete(Constants.EMPLOYEE_API+'/delete',Constants.HTTP_OPTIONS);
  }
}
