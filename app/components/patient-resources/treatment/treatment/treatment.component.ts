import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../../../services/redcap.service";
import {Card3} from "../../../../card3.model";
import {TimedSegment} from "../../../../timedsegment.model";

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  card1 = [];
  card2 = [];

  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
    this.card1 = this.redcapService.getTreatment_Cards(0,3);
    this.card2 = this.redcapService.getTreatment_Cards(3,5);
  }

  saveFavorite(label:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.saveFavorites(timedSegment.user, label).subscribe( res => { 
    });
  }

}
