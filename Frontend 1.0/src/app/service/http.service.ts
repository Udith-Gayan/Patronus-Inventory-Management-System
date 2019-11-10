import { LoginRequest } from './../login/loginRequest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../models/constants';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Feedback } from '../models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // login(employee: Employee) {
  //   return this.http.post(Constants.EMPLOYEE_API + '/login', employee, Constants.HTTP_OPTIONS);
  // }

  login(loginRequest: LoginRequest) {

    return this.http.post(Constants.BASE_URL + '/authenticate', loginRequest);
  }


  constructor(private http: HttpClient) {}

  addEmployee(employee: Employee){
    return this.http.post(Constants.EMPLOYEE_API + '/add', employee, Constants.HTTP_OPTIONS);
   // return this.http.post(Constants.EMPLOYEE_API + '/add', employee);
  }


  getAllEmployeee(): Observable<any> {
    return this.http.get(Constants.EMPLOYEE_API + '/all');
  }

  deleteEmployee(nicNumber){                              // deleteEmployee(employee :Employee){
    return this.http.delete(Constants.EMPLOYEE_API + '/delete', {params: {nic: nicNumber}, observe: 'response'});    // return this.http.delete(Constants.EMPLOYEE_API+'/delete',Constants.HTTP_OPTIONS);
  }

  // reset password mail sender
  sendMail(resetForm){
    return this.http.post(Constants.BASE_URL + '/resetpassword/sendmail', resetForm);
  }


  ///////////////////feedaback/////////////////////////
  feedbackemployee(feedaback : Feedback){
      return this.http.post(Constants.BASE_URL + '/feedback/feedbackform',feedaback,Constants.HTTP_OPTIONS);
  }



    // getAllEmployees() {
  //   const auth = sessionStorage.getItem('basicauth');
  //   const  headers = new  HttpHeaders().set("Authorization", auth);
  //   console.log('headers created');
  //   return this.http.get(Constants.EMPLOYEE_API + '/all', {headers});
  //  // return this.http.get(Constants.EMPLOYEE_API + '/all');
  // }


  ///////////////////////////block Employee//////////////////////

  BlockEmp(nic){
    console.log(' Block http request ran')
    return this.http.get(Constants.BASE_URL+ '/employees/blockuser', {params: {nic: nic}, observe: 'response'});
  }

  ///////////////////////////UnblockEmp////////////////////////
  UnBlockEmp(nic){
    return this.http.get(Constants.BASE_URL + '/employees/unblockuser', {params: {nic: nic}, observe: 'response'});
 
  }

  /////////////////////////update Employeee///////////////////////

  updateEmployee(employee:Employee){
    return this.http.post(Constants.EMPLOYEE_API + '/add', employee, Constants.HTTP_OPTIONS);
  
  }
}
