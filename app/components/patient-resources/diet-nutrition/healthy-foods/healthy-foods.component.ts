import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../../../services/redcap.service";
import {TimedSegment} from "../../../../timedsegment.model";
import {WebResource} from "../../../../webresource.model";

declare var SC;

@Component({
  selector: 'app-healthy-foods',
  templateUrl: './healthy-foods.component.html',
  styleUrls: ['./healthy-foods.component.scss']
})
export class HealthyFoodsComponent implements OnInit {

  isFav: boolean = false;
  label: string = "Healthy Foods";

  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
  }
  
  ngAfterContentInit(){
    let timedSegment = this.redcapService.getTimedSegment();
    timedSegment.topic = "Resource Healthy Foods";
    this.redcapService.setTimedSegment(timedSegment);

    var iframeElement   = document.querySelector('iframe');
    var iframeElementID = iframeElement.id;
    var widget1         = SC.Widget(iframeElement);

    var localSvc = this.redcapService;

    widget1.bind(SC.Widget.Events.PLAY, function(e) {      
      widget1.getCurrentSound(function(currentSound) {
        localSvc.logWebsite(timedSegment,currentSound.permalink,"sound file").subscribe( res => {});
      });
    });
    
    this.checkFavorite();

  }

  logWebsite(site:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.logWebsite(timedSegment, site, "website").subscribe( res => {});
  }

  logPDF(doc:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.logWebsite(timedSegment, doc, "pdf").subscribe( res => {});
  }

  checkFavorite(){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.getFavorites(timedSegment.user).subscribe( res => {

      if(res.length > 0){
      if(res.filter(card => card == this.label).length > 0){
        console.log("found: " + this.label);
        this.isFav = true;
      }
      }

    });
  }

  toggleFavorite(){
    if(this.isFav){
      this.deleteFavorite();
      this.isFav = false;
    }else{
      this.saveFavorite();
      this.isFav = true;
    }
  }

  saveFavorite(){
      console.log("saving: " + this.label);
      let timedSegment = this.redcapService.getTimedSegment();
      this.redcapService.saveFavorites(timedSegment.user, this.label).subscribe( res => {});
  }

  deleteFavorite(){
    console.log("delete: " + this.label);
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.deleteFavorites(timedSegment.user, this.label).subscribe( res => {});
  }

}
