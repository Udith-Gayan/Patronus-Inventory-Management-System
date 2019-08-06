import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Employee } from '../../firebase/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view2-emp',
  templateUrl: './view2-emp.component.html',
  styleUrls: ['./view2-emp.component.scss']
})
export class View2EmpComponent implements OnInit {
  emp: Observable<Employee[]>;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getAllEmployeee()
    .subscribe(res=>{
      console.log(res)
      this.emp = res
      console.log(this.emp)

    })
  }

}
