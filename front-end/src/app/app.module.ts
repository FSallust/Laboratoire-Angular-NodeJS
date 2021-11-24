import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home/home.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { ControlMessagesComponent } from './control/control-messages/control-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionErrorComponent } from './_redirect-error/form-error/inscription-error/inscription-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    InscriptionComponent,
    ControlMessagesComponent,
    InscriptionErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
