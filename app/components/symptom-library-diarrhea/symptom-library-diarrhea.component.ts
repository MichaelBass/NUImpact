import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-diarrhea',
  templateUrl: './symptom-library-diarrhea.component.html',
  styleUrls: ['./symptom-library-diarrhea.component.scss']
})
export class SymptomLibraryDiarrheaComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}
	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Diarrhea";
	    this.redcapService.setTimedSegment(timedSegment);
	  }
		
	dismiss(){
	this.isWarn = false;
	}

}
