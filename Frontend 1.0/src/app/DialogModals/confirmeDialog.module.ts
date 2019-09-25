import { NgModule } from '@angular/core';  
import { ConfireDialogComponent } from './confire-dialog/confire-dialog.component';
import { ConfireDialogService } from './Confire-Dialog.service';
  
  
@NgModule({  
    declarations: [  
        ConfireDialogComponent  
    ],  
    exports: [  
        ConfireDialogComponent  
    ],providers:[  
        ConfireDialogService  
    ]  
})  
export class ConfirmDialogModule  
{  
}  