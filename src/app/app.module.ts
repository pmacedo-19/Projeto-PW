import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business/business-card/business-card.component';
import { BusinessListComponent } from './business/business-list/business-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BusinessService } from './services/business.service';
import { AboutPageComponent } from './about-page/about-page.component';

const appRoutes: Routes = [
  {path: '', component: BusinessListComponent},
  {path: 'about', component: AboutPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    BusinessListComponent,
    NavBarComponent,
    AboutPageComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BusinessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
