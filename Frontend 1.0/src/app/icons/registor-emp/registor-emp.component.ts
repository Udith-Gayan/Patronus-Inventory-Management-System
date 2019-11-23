import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';
import { ImageUploadModel } from '../../models/ImageModel';

////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { FormGroupDirective } from '@angular/forms';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-registor-emp',
  templateUrl: './registor-emp.component.html',
  styleUrls: ['./registor-emp.component.scss']
})
export class RegistorEmpComponent implements OnInit {


  constructor(private userservice:HttpService ,private route: ActivatedRoute) {

    this.employee=new Employee();
   }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       employee: Employee;
       public imgUrl: any ="/assets/img/1.jpeg";

       selectedFile: any;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.route.paramMap.subscribe(param =>{
      const empId=+param.get('id');
      if(empId){
        this.getEmp(empId);
      }
    })


  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getEmp(id: number){
    this.userservice.getAllEmployeee().subscribe();

  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  onSubmit(f: FormGroupDirective) {   // hee
    console.log(this.employee);

    this.employee.img = this.imgBody;

    console.log(this.employee);

    this.userservice.addEmployee(this.employee).subscribe((response) => {
      console.log(response);
      this.resetForm();
      

      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Employee has been saved',
        showConfirmButton: false,
        timer: 1500,

      },
      ( error: any) => {

        alert('Please Check the AssetID ');



      }
      );

      f.resetForm();  // hee
     
    });
   
    

    // this.userService.addEmployee(this.employee);

  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  logchange(data){
    console.log(data);
  }

// InstAntialization
  imageUploadModel: ImageUploadModel = { Title: undefined,
                                         Description: undefined,
                                         ImageType: undefined,
                                         Base64String: undefined};

  imgBody: string;


  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Below part is used to display the selected image and stringify the image and set it into  employee's img property
  onChange(event){
    console.log(event);
    this.selectedFile = event.target.files[0];

    if (this.selectedFile.type.split('/')[0] !== 'image') {                      // check if it's a image or not
      console.log('This is not an image.Please upload an image');
      return;
     }

     console.log(this.selectedFile.type.split('/')[1]);   // file type prints
     this.imageUploadModel.ImageType = this.selectedFile.type.split('/')[1];   // set file type




   console.log('line000');
/************ */
        let reader = new FileReader();


     reader.onload = (event2) => {                                                                         //   only runs after reading the whole file
                                  console.log('line9');                                                    //   from readasDataURL method.
                                  this.imgUrl = reader.result;
                                  console.log('line10');

                                  this.imageUploadModel.Base64String = this.imgUrl.toString();
                                  console.log('line10.1');
                                 console.log('base64y = '+ this.imageUploadModel.Base64String);
                                 console.log('line10.222');
                                };

     console.log('line13');

     reader.onloadend = (end) =>{console.log('load end function runs');                                //  runs at end of loading and evyerything by onload method
                                this.imgBody = JSON.stringify(this.imageUploadModel);
                                console.log('line22');
                                console.log('string body = '+ this.imgBody);   //
                                 console.log('goooooo');
                                 };


     console.log('line12');

     reader.readAsDataURL(this.selectedFile);               // read and loads the file

/************** */


console.log('line11');

  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Delay function.
   sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


resetForm(){
  this.employee.email='';
  this.employee.address='';
  this.employee.contactNo='';
  this.employee.firstname='';
  this.employee.gender='';
  this.imgUrl="/assets/img/1.jpeg";
  this.employee.lastname='';
  this.employee.nic='';
  this.employee.password='';
  this.employee.status='';
  this.employee.location='';
  this.ngOnInit();
}

}
