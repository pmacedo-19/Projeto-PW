import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business/business-card/business-card.component';
import { BusinessListComponent } from './business/business-list/business-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BusinessService } from './services/business.service';

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    BusinessListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BusinessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
