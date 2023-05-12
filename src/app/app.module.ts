import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesError404Component,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
