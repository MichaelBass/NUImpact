import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-insomnia',
  templateUrl: './symptom-library-insomnia.component.html',
  styleUrls: ['./symptom-library-insomnia.component.scss']
})
export class SymptomLibraryInsomniaComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}
	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Insomnia";
	    this.redcapService.setTimedSegment(timedSegment);
	  }
		
	dismiss(){
	this.isWarn = false;
	}
	
	displayWebsite(site:string){
		window.open(site, "_blank");
  	}
}
