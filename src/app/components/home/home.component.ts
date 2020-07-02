import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Observable } from 'rxjs';
import { GlobalDataSummary } from 'src/app/models/globalData';
import { GoogleChartInterface } from 'ng2-google-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  totalActive = 0;
  pieChart: GoogleChartInterface = {
    chartType: "PieChart"
  }
  columnChart: GoogleChartInterface = {
    chartType: "columnChart"
  }

  gobalData: GlobalDataSummary[];
  constructor(private dataService: DataServiceService) { 
    
  }

  initChart() {

    let dataTable = [];
    dataTable.push(["Country ", "Cases"])
    this.gobalData.forEach(pieIterator => {
      if(pieIterator.confirmed>100000)
      {
        dataTable.push([
          pieIterator.country, pieIterator.confirmed
        ])
      }     
    })

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: dataTable,
      //firstRowIsData: true,
      options: {
        height: 300
      }
    
    };

    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: dataTable,
      //firstRowIsData: true,
      options: {
        height: 300
      }


    };


    
  }


  ngOnInit(): void {
    
    this.dataService.getGlobalData()
      .subscribe(

        {
          next: (result) => {
            console.log(result);
            this.gobalData = result;
            //aIterate over each to find Total Value
            result.forEach(resultIteration => {
              //Iterate only when COnfirmed cases is a number otherwise do not iterate
              if (!Number.isNaN(resultIteration.confirmed)) {
                this.totalActive += resultIteration.active
                this.totalConfirmed += resultIteration.confirmed
                this.totalDeaths += resultIteration.deaths
                this.totalRecovered += resultIteration.deaths
              }
              
            this.initChart();   

            })
            

          }


        }

      )
        

  }
}


