import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TextServiceService {
  private textDataCombat;
  private textDataTravel;
  private textDataSocialDistance;
  private textData21;
  private textData22;
  private textData23;
  private textData31;
  private textData32;
  private textData33;
  private textData11Headline;
  private textData12Headline;
  private textData13Headline;
  private textData21Headline;
  private textData22Headline;
  private textData23Headline;
  private textData31Headline;
  private textData32Headline;
  private textData33Headline;
  private headline;
  private headlineSummary;

  constructor(private http: HttpClient) { }

  getHeadline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/Headline.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  getHeadlineSummary() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/Headline%20Summary.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }


  getTextDataCombat() {
    this.textDataCombat = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/12.txt";
    return this.http.get(this.textDataCombat, { responseType: 'text' });
  }
  gettextData11Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/11Headline";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }


  getTextDataTravel() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/11.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData12Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/12Headline";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  getTextDataSocialDistance() {
    this.textDataSocialDistance = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/13.txt";
    return this.http.get(this.textDataSocialDistance, { responseType: 'text' });
  }

  gettextData13Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/13Headline";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData21() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/21.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData21Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/21Headline.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }



  gettextData22() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/22.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData22Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/22Headline.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }



  gettextData23() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/23.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData23Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/23Headline.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }


  gettextData31() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/31.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData31Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/31Headline.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData32() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/32.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData32Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/32Headline.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData33() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/33.txt";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }

  gettextData33Headline() {
    this.textDataTravel = "https://raw.githubusercontent.com/XebiaUpdates/Xebia-Covid-Website/master/33Headline";
    return this.http.get(this.textDataTravel, { responseType: 'text' });
  }











}
