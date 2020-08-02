import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-anxiety',
  templateUrl: './symptom-library-anxiety.component.html',
  styleUrls: ['./symptom-library-anxiety.component.scss']
})
export class SymptomLibraryAnxietyComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}

	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Anxiety";
	    this.redcapService.setTimedSegment(timedSegment);
	  }

	  logWebsite(site:string){
	    let timedSegment = this.redcapService.getTimedSegment();
	    this.redcapService.logWebsite(timedSegment, site, "website").subscribe( res => {});
	  }

	  logPDF(doc:string){
	    let timedSegment = this.redcapService.getTimedSegment();
	    this.redcapService.logWebsite(timedSegment, doc, "pdf").subscribe( res => {});
	  }	 
   
	dismiss(){
	this.isWarn = false;
	}
	
	displayWebsite(site:string){
		window.open(site, "_blank");
  	}
}
