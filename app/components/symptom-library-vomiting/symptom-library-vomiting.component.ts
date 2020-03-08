import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-vomiting',
  templateUrl: './symptom-library-vomiting.component.html',
  styleUrls: ['./symptom-library-vomiting.component.scss']
})
export class SymptomLibraryVomitingComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}
	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Vomiting";
	    this.redcapService.setTimedSegment(timedSegment);
	  }
	
	dismiss(){
	this.isWarn = false;
	}

}
