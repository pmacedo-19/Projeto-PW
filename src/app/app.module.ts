import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business/business-card/business-card.component';
import { BusinessListComponent } from './business/business-list/business-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BusinessService } from './services/business.service';
import { AboutPageComponent } from './about-page/about-page.component';
import { BusinessDetailComponent } from './business/Business-detail/Business-detail.component';
import { BusinessReviewComponent } from './business/business-review/business-review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Location } from '@angular/common';

const appRoutes: Routes = [
  {path: 'business', component: BusinessListComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'business-details/:Id', component: BusinessDetailComponent},
  {path: 'business-review', component: BusinessReviewComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    BusinessListComponent,
    NavBarComponent,
    AboutPageComponent,
    BusinessDetailComponent,
    BusinessReviewComponent,
    PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BusinessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
