import { Component, OnInit } from '@angular/core';
import { TextServiceService } from 'src/app/services/text-service.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  private imageToBeDisplayed13;
  private imageToBeDisplayed23;
  private imageToBeDisplayed33;

  constructor() { }

  ngOnInit(): void {

  }

}
