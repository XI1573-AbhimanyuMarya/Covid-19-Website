import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { GovermentSOPComponent } from './components/goverment-sop/goverment-sop.component';
import { XebiaGuidelinesComponent } from './components/xebia-guidelines/xebia-guidelines.component';
import { CreatorComponent } from './components/creator/creator.component';


const routes: Routes = [
  {path: '', component :XebiaGuidelinesComponent},
  {path: 'countries', component : CountriesComponent},
  {path: 'govermentGuidelines', component : GovermentSOPComponent},
  {path: 'data', component : HomeComponent },
  {path: 'creator', component : CreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
