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
  customers:["sajith","madhsanka"];
  imgUrl:String="assets/img/laptop.jpg";
  status:string = sessionStorage.getItem('status');
  
  constructor(private userService : HttpService) { 
    this.asset = new Asset();
    console.log(this.asset);
  }
  
  ngOnInit() {
    this.toggle1(1);
  }
  
  onSubmit() {
    console.log(this.asset);
    this.userService.addEmployee(this.asset).subscribe((response)=>{
      console.log(response);
      alert('Asset Successfully Saved');
    });
    
  }
  isButtonActive: number = 0;

  toggle1( val) {
    console.log(' val ='+ val);
    this.isButtonActive = val;
  }
}
