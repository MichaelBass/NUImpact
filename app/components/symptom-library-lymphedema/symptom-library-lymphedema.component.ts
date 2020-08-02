import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-lymphedema',
  templateUrl: './symptom-library-lymphedema.component.html',
  styleUrls: ['./symptom-library-lymphedema.component.scss']
})
export class SymptomLibraryLymphedemaComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}

	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Lymphedema";
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
