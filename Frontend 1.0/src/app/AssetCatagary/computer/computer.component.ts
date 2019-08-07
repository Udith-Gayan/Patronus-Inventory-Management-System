import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';
import { addAllToArray } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {
  
asset: Asset;

  constructor(private userService:HttpService) { 
    this.asset=new Asset();
    
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
