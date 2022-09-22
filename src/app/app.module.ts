import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { StoreModule } from '@ngrx/store';
import { reducerCard } from './state/card.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CardEffects } from './state/card.effects';

const routes : Routes = [
  {path:"card", component:CardComponent },
  {path:"", component:FormComponent },
] 

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({card:reducerCard}),
    EffectsModule.forRoot([CardEffects]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
