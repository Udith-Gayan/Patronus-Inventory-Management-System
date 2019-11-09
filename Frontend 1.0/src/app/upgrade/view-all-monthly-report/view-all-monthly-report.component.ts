import { Component, OnInit } from '@angular/core';
import { MonthlyReport } from '../../models/MonthlyReport';
import { HttpService } from '../../service2/http.service';

@Component({
  selector: 'app-view-all-monthly-report',
  templateUrl: './view-all-monthly-report.component.html',
  styleUrls: ['./view-all-monthly-report.component.scss']
})
export class ViewAllMonthlyReportComponent implements OnInit {

  monthlyReport :MonthlyReport;
  constructor( private report:HttpService) { 
    this.monthlyReport=new MonthlyReport();
  }

  ngOnInit() {
  }

  sendDetail(){
    console.log("line 1");
    this.report.sendDetails(this.monthlyReport).subscribe((response) => {
      console.log(response);
    })
  }
 

}
