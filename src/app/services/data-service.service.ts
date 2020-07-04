import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { GlobalDataSummary } from '../models/globalData';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private globalDataUrl;
  constructor(private http: HttpClient) {
    const today = new Date()

let conditionOnTime=new Date();
console.log(conditionOnTime.getHours());

if(conditionOnTime.getHours()>11){

    const year = today.getFullYear()

    var newDate = new Date( today.getTime() - (1 * 24 * 60 * 60 * 1000) );
    const month = `${newDate.getMonth() + 1}`.padStart(2, "0")
    
    const day = `${newDate.getDate()}`.padStart(2, "0")
    
    const stringDate = [month,day,year].join("-") 
    console.log(stringDate);
    globalDataUrl :String;
    
    this.globalDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${stringDate}.csv`;
        
}
else{
    const year = today.getFullYear()

    var newDate = new Date( today.getTime() - (2 * 24 * 60 * 60 * 1000) );
    const month = `${newDate.getMonth() + 1}`.padStart(2, "0")
    
    const day = `${newDate.getDate()}`.padStart(2, "0")
    
    const stringDate = [month,day,year].join("-") 
    console.log(stringDate);
    globalDataUrl :String;
    
    this.globalDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${stringDate}.csv`;

}


    

  }

  getGlobalData() {
    return this.http.get(this.globalDataUrl, { responseType: 'text' }).pipe(
      map(result => {
        let data: GlobalDataSummary[] = [];
        let raw = {};

        let rows = result.split('\n')
        // console.log(rows)
        rows.splice(0, 1);
        rows.forEach(rows => {
          let cols = rows.split(/,(?=\S)/);
          //Geting colum value as per their Index
          let cs = {
            country: cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10]

          };

          let temp: GlobalDataSummary = raw[cs.country];
          if (temp) {
            temp.active = temp.active + cs.active;
            temp.confirmed = temp.confirmed + cs.confirmed;
            temp.deaths = temp.deaths + cs.deaths;
            temp.recovered = temp.recovered + cs.recovered;
            //To append Values with same country name to similar object
            raw[cs.country] = temp;

          } else {
            raw[cs.country] = cs;
          }

          data.push(raw)

        })

        return <GlobalDataSummary[]>Object.values(raw);
      })
    )
  }

}
