import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/globalData';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  
  constructor(private dataService : DataServiceService) { }
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  totalActive = 0;  

  countryList: String[] =[];
  countryData: GlobalDataSummary[];
  ngOnInit(): void {
    this.dataService.getGlobalData()
    .subscribe( countryResult=>{
      this.countryData=countryResult;
      this.countryData.forEach(countryIterator=>{
        this.countryList.push(countryIterator.country);
        // this.countryList.sort();
      })
    })
  }

  updateValues(countrySelected : String){
    
    this.countryData.forEach(cs=>{
      if(cs.country==countrySelected)
      {
        this.totalActive=cs.active
        this.totalConfirmed=cs.confirmed
        this.totalDeaths=cs.deaths
        this.totalRecovered=cs.recovered

      }

      
    })

  }


}
