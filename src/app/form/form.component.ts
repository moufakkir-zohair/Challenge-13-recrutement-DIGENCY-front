// import { HttpEventType, HttpResponse } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { QrCodeGeneratorService } from '../services/qrcodegenerator.service';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {

//   userForm !: FormGroup;
//   urllink: string = ""



//   currentCar : any;
//   editPhoto !: boolean;
//   selectedFiles: any;
//   progress!: number;
//   currentFileUpload: any;
//   currentTime!: number;


//   constructor(private formBuilder: FormBuilder, private qrcodegeneratorService: QrCodeGeneratorService){

//   }

//   ngOnInit(){
//     this.initForm();
//   }


//   initForm() {
//     this.userForm = this.formBuilder.group({
//       nomFr: '',
//       nomAr: '',
//       prenomFr: '',
//       prenomAr: '',
//       cin: '',
//       profession: '',
//       dateNaissance: '',
//       typeCarte: '',
//       image: '',
//     })
//   }


//   onSubmitForm(){
//     this.qrcodegeneratorService.QrCodeGenerator(this.userForm.value).subscribe(data =>{
//       console.log(data);
//     })
//   }



//   onSelectedFile(event: any) {
//     this.selectedFiles=event.target.files;
//     this.uploadPhoto();
//   }

//   uploadPhoto() {
//     this.currentFileUpload = this.selectedFiles.item(0)
//     this.qrcodegeneratorService.uploadPhotoCar(this.currentFileUpload).subscribe(event => {
//       if (event.type === HttpEventType.UploadProgress) {
//       } else if (event instanceof HttpResponse) {
//       }
//     },err=>{
//       alert("Problème de chargement");
//     })

//   }

// }





import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { QrCodeGeneratorService } from '../services/card.service';
import { QrCodeGenerateAction, UplaodPhotoAction } from '../state/card.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm !: FormGroup;
  selectedFiles: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private store: Store<any>, private router: Router, private qrcodegeneratorService: QrCodeGeneratorService) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      nomFr: ["", Validators.required],
      nomAr: ["", Validators.required],
      prenomFr: ["", Validators.required],
      prenomAr: ["", Validators.required],
      cin: ["", Validators.required],
      profession: ["", Validators.required],
      dateNaissance: ["", Validators.required],
      typeCarte: ["A", Validators.required],
      image: ["", Validators.required],
    })
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.userForm?.invalid) return;
    this.store.dispatch(new UplaodPhotoAction(this.selectedFiles));
    this.store.dispatch(new QrCodeGenerateAction(this.userForm.value));
    this.router.navigateByUrl('/card');
  }


  onSelectedFile(event: any) {
    this.selectedFiles = event.target.files[0];
  }


}

