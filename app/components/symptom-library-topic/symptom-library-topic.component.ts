import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptom-library-topic',
  templateUrl: './symptom-library-topic.component.html',
  styleUrls: ['./symptom-library-topic.component.scss']
})
export class SymptomLibraryTopicComponent implements OnInit {
	isWarn: boolean = true;
	constructor() { }

	ngOnInit() {
	}
	dismiss(){
	this.isWarn = false;
	}

}
