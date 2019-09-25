import { Component, OnInit } from '@angular/core';
import { ConfireDialogService } from '../Confire-Dialog.service';

@Component({
  selector: 'app-confire-dialog',
  templateUrl: './confire-dialog.component.html',
  styleUrls: ['./confire-dialog.component.scss']
})
export class ConfireDialogComponent{
///////////////////////////////////////////////////////////////////////////This Component not working 
  message: any;  
    constructor(  
        private confirmDialogService: ConfireDialogService  
    ) { }  
  
    ngOnInit() {  
        //this function waits for a message from alert service, it gets   
        //triggered when we call this from any other component  
        this.confirmDialogService.getMessage().subscribe(message => {  
            this.message = message;  
            console.log("hello");
        });  
    }  
}
