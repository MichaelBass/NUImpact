import { Component, OnInit } from '@angular/core';
import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-symptom-library-nausea',
  templateUrl: './symptom-library-nausea.component.html',
  styleUrls: ['./symptom-library-nausea.component.scss']
})
export class SymptomLibraryNauseaComponent implements OnInit {
	isWarn: boolean = true;
	constructor(private redcapService: RedcapService) { }

	ngOnInit() {
	}
	  ngAfterContentInit(){
	    let timedSegment = this.redcapService.getTimedSegment();
	    timedSegment.topic = "SymptomLibrary Nausea";
	    this.redcapService.setTimedSegment(timedSegment);
	  }
			
	dismiss(){
	this.isWarn = false;
	}

}