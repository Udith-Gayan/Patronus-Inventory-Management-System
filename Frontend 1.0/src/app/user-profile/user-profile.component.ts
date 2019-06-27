import { Component, OnInit } from '@angular/core';
import { Asset} from '../asset/asset';
import { HttpService } from '../service2/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
  
})
export class UserProfileComponent implements OnInit {
  asset : Asset;
  
  constructor(private userService : HttpService) { 
    this.asset = new Asset();
    console.log(this.asset);
  }
  
  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.asset);
    this.userService.addEmployee(this.asset).subscribe((response)=>{
      console.log(response);
      alert('Asset Successfully Saved');
    });
    
  }
}
