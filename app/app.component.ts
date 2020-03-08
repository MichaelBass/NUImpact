import { Component, OnInit } from "@angular/core";
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import {RedcapService} from "./services/redcap.service";
import {TimedSegment} from "./timedsegment.model";

import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	timedSegments: TimedSegment[];

	constructor(private redcapService: RedcapService, private router: Router) {
	}

	ngOnInit() {
		this.timedSegments =[];

		interval(15000)
		  .pipe(
		    startWith(0),
		    switchMap(() => this.redcapService.persistTimedSegment(this.redcapService.getTimedSegment()))
		  )
		  .subscribe( res => {this.timedSegments.push(res);});

		this.router.events.subscribe(evt => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			window.scrollTo(0,0);
		});

	}
}

