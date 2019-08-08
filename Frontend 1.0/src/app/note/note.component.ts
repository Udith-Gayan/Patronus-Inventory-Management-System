import { Component, OnInit } from '@angular/core';
import { emp } from '../Testing/service/ex.model';




@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private service : emp) { }
 
  

  ngOnInit() {
   
  }
  


}
