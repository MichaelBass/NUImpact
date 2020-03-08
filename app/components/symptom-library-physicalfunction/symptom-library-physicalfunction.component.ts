import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-physicalfunction',
  templateUrl: './symptom-library-physicalfunction.component.html',
  styleUrls: ['./symptom-library-physicalfunction.component.scss']
})
export class SymptomLibraryPhysicalFunctionComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}
	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Physical Function";
	    this.redcapService.setTimedSegment(timedSegment);
	  }

	dismiss(){
	this.isWarn = false;
	}

}
