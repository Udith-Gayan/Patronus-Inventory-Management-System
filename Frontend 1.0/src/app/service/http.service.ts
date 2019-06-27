import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../models/constants';
import { Employee } from '../models/employee';

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
}
