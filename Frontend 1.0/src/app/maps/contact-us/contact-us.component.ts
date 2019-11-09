import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/Feedback';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  feedback:Feedback;
  constructor(private service:HttpService) { 
      this.feedback=new Feedback();

  }

  ngOnInit() {
  }

  sendFeedback(){
    console.log("line 1");
    console.log(this.feedback);
    this.service.feedbackemployee(this.feedback).subscribe((res)=>{
      console.log(res);
      
            
    } );
  }
}
