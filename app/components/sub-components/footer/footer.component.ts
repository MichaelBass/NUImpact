import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	navLinks = [
		{
			path: 'dashboard',
			label: 'DASHBOARD',
			icon: 'icon-dashboard'
		},
		{
			path: 'symptom-library',
			label: 'SYMPTOM LIBRARY',
			icon: 'icon-symptom-library'
		},
		{
			path: 'patient-resources',
			label: 'PATIENT RESOURCES',
			icon: 'icon-patient-resources'
		},
		{
			path: 'my-favorites',
			label: 'MY FAVORITES',
			icon: 'icon-my-favorites'
		},
		{
			path: 'contact-us',
			label: 'CONTACT US',
			icon: 'icon-contact-us'
		}
	]
	constructor() { }

	ngOnInit() {
	}

	goToTop(){ 
		window.scrollTo(0, 0);
	}

}
