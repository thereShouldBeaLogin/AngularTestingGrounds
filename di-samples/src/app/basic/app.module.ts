import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from "./product.component";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent, ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
