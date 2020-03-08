import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-breath',
  templateUrl: './symptom-library-breath.component.html',
  styleUrls: ['./symptom-library-breath.component.scss']
})
export class SymptomLibraryBreathComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}

	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Breath";
	    this.redcapService.setTimedSegment(timedSegment);
	  }

	dismiss(){
	this.isWarn = false;
	}

}