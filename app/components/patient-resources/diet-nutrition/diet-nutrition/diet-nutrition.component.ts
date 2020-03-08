import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../../../services/redcap.service";
import {Card3} from "../../../../card3.model";
import {TimedSegment} from "../../../../timedsegment.model";

@Component({
  selector: 'app-diet-nutrition',
  templateUrl: './diet-nutrition.component.html',
  styleUrls: ['./diet-nutrition.component.scss']
})
export class DietNutritionComponent implements OnInit {

  card1 = [];
  card2 = [];
  //card3 = [];

  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
    this.card1 = this.redcapService.getDiet_Cards(0,3);
    this.card2 = this.redcapService.getDiet_Cards(3,5);
    //this.card2 = this.redcapService.getDiet_Cards(3,6);
    //this.card3 = this.redcapService.getDiet_Cards(6,7);
  }

  saveFavorite(label:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.saveFavorites(timedSegment.user, label).subscribe( res => { 
    });
  }

}
