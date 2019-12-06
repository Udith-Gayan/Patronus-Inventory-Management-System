import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service2/http.service';
import { Observable } from 'rxjs';
import { ownAsset } from '../../models/ownAsset';

////////////

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FutureDates } from '../../asset/futureDates';

// import 'sweetalert2/src/sweetalert2.scss';

// const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-own-asset',
  templateUrl: './own-asset.component.html',
  styleUrls: ['./own-asset.component.scss']
})
export class OwnAssetComponent implements OnInit {
    ownAsset : Observable<ownAsset>
    nic = sessionStorage.getItem('nic');
    status = sessionStorage.getItem('status');

  constructor(private ownasset : HttpService) {  }

  ngOnInit() {
    this.ownasset.getAllOwnAssets(this.nic).subscribe(res=>{

      console.log(res);
      this.ownAsset = res.body;
      console.log("line2");
      console.log(this.ownAsset);
    })
  }



  /////////////////////////////////////////cancel Booking Asset////////////////////////////

  cancelBoolAsset(id : number){

     
                                                       console.log("cancel BookAsset");
                                                       console.log(id);
                                                       Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        type: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, cancel it!',

                                                        

                                                      }).then((result) => {
                                                      

                                                      

                                                      if (result.value) {
                                                        Swal.fire(
                                                          'Canceled!',
                                                          'Your file has been cancel.',
                                                          'success'
                                                        )
                                                        this.ownasset.deleteBookAsset(id).subscribe((data) => {
                                                          this.ngOnInit();
                                                          this.ngOnInit();
                                                          console.log(data);

                                                      console.log("Line23");
                                                     
                                                    })
                                                      }
 },
                                                         (error)=>{
                                                                    console.log(error);
                                                                    Swal.fire({
                                                                      type: 'error',
                                                                      title: 'Oops...',
                                                                      text: 'Something went wrong!',
                                                                      footer: '<a href>Why do I have this issue?</a>'
                                                                    })
                                                                  }
                                              );
    


   
  }
}
