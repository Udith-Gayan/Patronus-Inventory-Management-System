import { Component, OnInit } from '@angular/core';
import { MonthlyReport } from '../../models/MonthlyReport';
import { HttpService } from '../../service2/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-monthly-report',
  templateUrl: './view-all-monthly-report.component.html',
  styleUrls: ['./view-all-monthly-report.component.scss']
})
export class ViewAllMonthlyReportComponent implements OnInit {
  email:string = sessionStorage.getItem('email');
  Fname:string = sessionStorage.getItem('firstname');
  Lname:string = sessionStorage.getItem('lastname');
  status:string = sessionStorage.getItem('status');
  today=new Date();
  
  monthlyReport :MonthlyReport;
  Report:Observable<MonthlyReport[]>
  ReportBreakdown:Observable<MonthlyReport[]>
  ReportRequestApprove:Observable<MonthlyReport[]>
  ReportRequestReject:Observable<MonthlyReport[]>


  constructor( private report:HttpService) { 
    this.monthlyReport=new MonthlyReport();
  }

  ngOnInit() {
  }

  sendDetail(){
    console.log("line 1");
    console.log(this.monthlyReport.month);
    console.log(this.monthlyReport.year);
  
    this.report.sendDetails(this.monthlyReport.year,this.monthlyReport.month).subscribe((response) => {
      console.log(response);
      this.Report=response.body.bookedAssets;
      this.ReportBreakdown=response.body.breakdowns;
      this.ReportRequestApprove=response.body.requestedApprovedAssets;
      this.ReportRequestReject=response.body.requestedRejectedAssets;

      console.log(this.Report);


    })
  }
 

}
