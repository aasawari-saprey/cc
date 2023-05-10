import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BooksComponent } from './books/books.component';
import { EnginnToolsComponent } from './enginn-tools/enginn-tools.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import { AddProductComponent } from './add-product/add-product.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AboutComponent,
    
    LoginComponent,
    SignupComponent,
    
    PopUpComponent,
         BooksComponent,
         EnginnToolsComponent,
         AddProductComponent,
         SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
