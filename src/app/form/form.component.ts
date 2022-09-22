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
    setTimeout(() => 
      this.router.navigateByUrl('/card')
    ,3000);
  }


  onSelectedFile(event: any) {
    this.selectedFiles = event.target.files[0];
  }


}

