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

  cardAll = [];

  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
    this.cardAll = this.redcapService.getWellBeing_Cards(0,10);
  }

  saveFavorite(label:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.saveFavorites(timedSegment.user, label).subscribe( res => { 
    });
  }

}
