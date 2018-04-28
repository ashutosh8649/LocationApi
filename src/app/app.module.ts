import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocationService } from './location.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }