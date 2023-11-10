import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {  HttpClientModule } from '@angular/common/http';
import { DinnerComponent } from './dinner/dinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DinnerdeatilsComponent } from './dinnerdeatils/dinnerdeatils.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelpComponent,
    LoginComponent,
    HomeComponent,
    DinnerComponent,
    RegisterComponent,
    DinnerdeatilsComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
