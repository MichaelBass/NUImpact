import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-pain',
  templateUrl: './symptom-library-pain.component.html',
  styleUrls: ['./symptom-library-pain.component.scss']
})
export class SymptomLibraryPainComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}
	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Pain";
	    this.redcapService.setTimedSegment(timedSegment);
	  }

	dismiss(){
	this.isWarn = false;
	}

	  logPDF(doc:string){
	    let timedSegment = this.redcapService.getTimedSegment();
	    this.redcapService.logWebsite(timedSegment, doc, "pdf").subscribe( res => {});
	  }	
	   
  logWebsite(site:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.logWebsite(timedSegment, site, "website").subscribe( res => {});
  }
  
}
