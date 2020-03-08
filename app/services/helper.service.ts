import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HelperService {
	isDebug=!0;
	constructor() { }

	setCookie(name, value, exdays) {
		let d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = "expires=" + d.toUTCString();
		document.cookie = name + "=" + value + ";" + expires + ";path=/";
	}

	getCookie(cname) {
		let name = cname + "=";
		let ca = document.cookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	debug(...args: any[]){
		if(this.isDebug && arguments.length){
			// for (let i = 0, len=arguments.length; i < len; i++) {
			// 	console.log(arguments[i]);
			// }
			console.log(...args);
		}
	}
}
