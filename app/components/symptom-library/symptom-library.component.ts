import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../services/redcap.service";
import {Card} from "../../card.model";

@Component({
  selector: 'app-symptom-library',
  templateUrl: './symptom-library.component.html',
  styleUrls: ['./symptom-library.component.scss']
})
export class SymptomLibraryComponent implements OnInit {

  card1 = [];
  card2 = [];
  card3 = [];

  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
    this.card1 = this.redcapService.getSymptom_Cards(0,4);
    this.card2 = this.redcapService.getSymptom_Cards(4,8);
    this.card3 = this.redcapService.getSymptom_Cards(8,11);
  }

}
