import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../../services/redcap.service";
import {Card2} from "../../../card2.model";

@Component({
  selector: 'app-patient-resources',
  templateUrl: './patient-resources.component.html',
  styleUrls: ['./patient-resources.component.scss']
})
export class PatientResourcesComponent implements OnInit {

  card1 = [];

  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
    this.card1 = this.redcapService.getResource_Cards(0,6);
  }

}
