import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-dashboard',
  templateUrl: './country-dashboard.component.html',
  styleUrls: ['./country-dashboard.component.css']
})
export class CountryDashboardComponent implements OnInit {

  @Input('totalConfirmed')
  totalConfirmed;

  @Input('totalDeaths')
  totalDeaths;

  @Input('totalRecovered')
  totalRecovered;

  @Input('totalActive')
  totalActive;

  constructor() { }

  ngOnInit(): void {
  }

}
