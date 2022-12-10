import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoggingComponent } from './logging/logging.component';
import { MainFormComponent } from './main-form/main-form.component';
import { AmazonPageComponent } from './amazon-page/amazon-page.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ReadyPageComponent } from './ready-page/ready-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoggingComponent,
    MainFormComponent,
    AmazonPageComponent,
    NoPageComponent,
    ReadyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
