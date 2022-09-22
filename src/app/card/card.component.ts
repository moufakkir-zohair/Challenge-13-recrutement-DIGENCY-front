import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { getUser } from '../state/card.selector';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  user!: User;
  public environment = environment;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(getUser).subscribe(user => this.user = user);
  }

  onGenerate() {
    const element = document.getElementById("carte");
    var opt = {
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 1, width: 86 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
      // jsPDF:        { unit: 'mm', format: [86,54], orientation: 'landscape' },
      html2canvas: { useCORS: true, scale: 2 }
    };
    html2pdf().set(opt).from(element).save();
  }

}


