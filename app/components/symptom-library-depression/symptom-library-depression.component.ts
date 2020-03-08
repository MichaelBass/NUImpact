import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-depression',
  templateUrl: './symptom-library-depression.component.html',
  styleUrls: ['./symptom-library-depression.component.scss']
})
export class SymptomLibraryDepressionComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}
	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Depression";
	    this.redcapService.setTimedSegment(timedSegment);
	  }
	
	dismiss(){
	this.isWarn = false;
	}

}
