import { Component, OnInit } from '@angular/core';
import { TextServiceService } from 'src/app/services/text-service.service';

@Component({
  selector: 'app-xebia-guidelines',
  templateUrl: './xebia-guidelines.component.html',
  styleUrls: ['./xebia-guidelines.component.css']
})
export class XebiaGuidelinesComponent implements OnInit {

  textDataToBeDisplayedCombat: String[];
  textCountCombat: number;
  textDataToBeDisplayedHeadline :String;

  textDataToBeDisplayedTravel: String[];
  textCountTravel: number;
  textDataToBeDisplayedTravelHeadline :String;

  textDataToBeDisplayedSocial: String[];
  textCountSocial: number;
  textDataToBeDisplayedSocialHeadline: String;

  textDataToBeDisplayed21: String[];
  textCount21: number;
  textDataToBeDisplayed21Headline :String;

  textDataToBeDisplayed22: String[];
  textCount22: number;
  textDataToBeDisplayed22Headline :String;

  textDataToBeDisplayed23: String[];
  textCount23: number;
  textDataToBeDisplayed23Headline :String;

  textDataToBeDisplayed31: String[];
  textCount31: number;
  textDataToBeDisplayed31Headline :String;

  textDataToBeDisplayed32: String[];
  textCount32: number;
  textDataToBeDisplayed32Headline :String;

  textDataToBeDisplayed33: String[];
  textCount33: number;
  textDataToBeDisplayed33Headline :String;

  textHeadlineToBeDisplayed :String;
  textHeadlineSummaryToBeDisplayed :String;


  globalData: String;

  constructor(private textService: TextServiceService) { }

  globalTextData: String;
  ngOnInit(): void {

    this.textService.getHeadline().subscribe({
      next: (resultCombat) => {
        this.textHeadlineToBeDisplayed=resultCombat
      }
    })


    this.textService.getHeadlineSummary().subscribe({
      next: (resultCombat) => {
        this.textHeadlineSummaryToBeDisplayed=resultCombat
      }
    })

    this.textService.getTextDataCombat().subscribe({

      next: (resultCombat) => {

        this.textDataToBeDisplayedCombat = resultCombat.split("\n")
        this.textCountCombat = this.textDataToBeDisplayedCombat.length;
        this.textDataToBeDisplayedCombat.splice(this.textCountCombat - 1, this.textCountCombat)
      }
    })


    this.textService.gettextData11Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayedHeadline=resultCombat
      console.log(resultCombat);
      
      }
    })



    this.textService.getTextDataTravel().subscribe({

      next: (resultTravel) => {
        console.log(resultTravel);
        
        this.textDataToBeDisplayedTravel = resultTravel.split("\n")
        this.textCountTravel = this.textDataToBeDisplayedTravel.length;
        this.textDataToBeDisplayedTravel.splice(this.textCountTravel - 1, this.textCountTravel)
      }

    })


    this.textService.gettextData12Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayedTravelHeadline=resultCombat
      console.log(resultCombat);
      
      }
    })



    this.textService.getTextDataSocialDistance().subscribe({

      next: (resultSocial) => {
        console.log(resultSocial);
        this.textDataToBeDisplayedSocial = resultSocial.split("\n")
        this.textCountSocial = this.textDataToBeDisplayedSocial.length;
        this.textDataToBeDisplayedSocial.splice(this.textCountSocial-1, this.textCountSocial)
      }

    })
    
    this.textService.gettextData13Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayedSocialHeadline=resultCombat
      }
    })

//----------------------------------------------------------------------
    this.textService.gettextData21().subscribe({

      next: (resultSocial) => {
        console.log(resultSocial);
        this.textDataToBeDisplayed21 = resultSocial.split("\n")       
        this.textCount21 = this.textDataToBeDisplayed21.length;        
        this.textDataToBeDisplayed21.splice(this.textCount21-1, this.textCount21)        
      }

    })

    this.textService.gettextData22().subscribe({

      next: (resultSocial) => {
        console.log(resultSocial);
        this.textDataToBeDisplayed22 = resultSocial.split("\n")       
        this.textCount22 = this.textDataToBeDisplayed22.length;        
        this.textDataToBeDisplayed22.splice(this.textCount22-1, this.textCount22)        
      }

    })


    this.textService.gettextData23().subscribe({

      next: (resultSocial) => {
        console.log(resultSocial);
        this.textDataToBeDisplayed23 = resultSocial.split("\n")       
        this.textCount23 = this.textDataToBeDisplayed23.length;        
        this.textDataToBeDisplayed23.splice(this.textCount23-1, this.textCount23)        
      }

    })

    this.textService.gettextData31().subscribe({

      next: (resultSocial) => {
        console.log(resultSocial);
        this.textDataToBeDisplayed31 = resultSocial.split("\n")       
        this.textCount31 = this.textDataToBeDisplayed31.length;        
        this.textDataToBeDisplayed31.splice(this.textCount31-1, this.textCount31)        
      }

    })

    this.textService.gettextData32().subscribe({

      next: (resultSocial) => {
        console.log(resultSocial);
        this.textDataToBeDisplayed32 = resultSocial.split("\n")       
        this.textCount32 = this.textDataToBeDisplayed32.length;        
        this.textDataToBeDisplayed32.splice(this.textCount32-1, this.textCount32)        
      }

    })

    this.textService.gettextData33().subscribe({
      next: (resultSocial) => {
        console.log(resultSocial);
        this.textDataToBeDisplayed33 = resultSocial.split("\n")       
        this.textCount33 = this.textDataToBeDisplayed33.length;        
        this.textDataToBeDisplayed33.splice(this.textCount33-1, this.textCount33)  
        console.log(this.textDataToBeDisplayed33,"-------++++++");
              
      }

    })


    this.textService.gettextData21Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayed21Headline=resultCombat
      }
    })

    this.textService.gettextData22Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayed22Headline=resultCombat
      }
    })

    this.textService.gettextData23Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayed23Headline=resultCombat
      }
    })


    this.textService.gettextData31Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayed31Headline=resultCombat
      }
    })

    this.textService.gettextData32Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayed32Headline=resultCombat
      }
    })

    this.textService.gettextData33Headline().subscribe({

      next: (resultCombat) => {
        this.textDataToBeDisplayed33Headline=resultCombat
      }
    })







    







  }





}
