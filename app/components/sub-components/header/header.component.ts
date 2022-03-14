import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
	public pushLeftClass: string;
	public selectedLang: string = "ES";
	@ViewChild('langSlide', { static: false }) langSlideToggle: MatSlideToggle;
	constructor(
		public route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.pushLeftClass = 'push-left';
	}

	ngAfterViewInit() {
		//setTimeout(() => {
		//	this.langSlideToggle.id && this.toggleLangText(this.langSlideToggle.id, this.langSlideToggle.checked);
		//}, 10);
	}
/*
	changeLang($event) {
		this.selectedLang = $event.checked ? 'EN' : 'ES';
		$event.source && this.toggleLangText($event.source.id, $event.checked);
	}

	toggleLangText(id, isChecked) {
		let thumbElem = document.getElementById(id).querySelector('.mat-slide-toggle-thumb');
		if (thumbElem) {
			(thumbElem as HTMLElement).innerText = isChecked ? 'ES' : 'EN';
		}
	}
*/
	playVideo(sidenav: any){
		window.open("https://player.vimeo.com/video/408256872", "_blank");
		sidenav.close();
	}

	navigate(route: string, sidenav: any) {
		this.router.navigate([route]);
		sidenav.close();
	}
}
