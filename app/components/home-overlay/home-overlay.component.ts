import { Component, OnInit} from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
	selector: 'app-home-overlay',
	templateUrl: './home-overlay.component.html',
	styleUrls: ['./home-overlay.component.scss']
})
export class HomeOverlayComponent implements OnInit {



	isHidden:Boolean=true;

	constructor(private helper : HelperService) { }

	ngOnInit() {
		 this.isHidden = this.helper.getCookie('overlayVideoDisabled')!='disabled';
		// this.helper.debug('hidden',this.isHidden,this.helper.getCookie('overlayVideoDisabled'));

	}

	skipVideo(){
		this.isHidden=false;
	}

	closeVideo(){
		this.skipVideo();
		this.helper.setCookie('overlayVideoDisabled','disabled',365);
	}
	
}