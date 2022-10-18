import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafeserviceService } from './cafeservice.service';
import { ScreenComponent } from './screen/screen.component';


@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [CafeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
