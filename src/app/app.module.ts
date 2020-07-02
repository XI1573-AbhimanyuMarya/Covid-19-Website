import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { GovermentSOPComponent } from './components/goverment-sop/goverment-sop.component';
import { XebiaGuidelinesComponent } from './components/xebia-guidelines/xebia-guidelines.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CountryDashboardComponent } from './components/country-dashboard/country-dashboard.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { CreatorComponent } from './components/creator/creator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    GovermentSOPComponent,
    XebiaGuidelinesComponent,
    CountryDashboardComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    Ng2GoogleChartsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
