import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../../../services/redcap.service";
import {Card3} from "../../../../card3.model";
import {TimedSegment} from "../../../../timedsegment.model";

@Component({
  selector: 'app-well-being',
  templateUrl: './well-being.component.html',
  styleUrls: ['./well-being.component.scss']
})
export class WellBeingComponent implements OnInit {

  card1 = [];
  card2 = [];

  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
    this.card1 = this.redcapService.getWellBeing_Cards(0,3);
    this.card2 = this.redcapService.getWellBeing_Cards(3,5);

  }

  saveFavorite(label:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.saveFavorites(timedSegment.user, label).subscribe( res => { 
    });
  }

}
