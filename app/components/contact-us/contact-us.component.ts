import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
	sendComment: FormGroup;

	constructor(private formBuilder: FormBuilder) {

	}

    ngOnInit() {
		this.sendComment = this.formBuilder.group({
      		fullName: ['', Validators.compose([Validators.pattern(/^[a-zA-Z]+[a-zA-Z '".-]*$/), Validators.required])],
      		email: ['', Validators.compose([Validators.pattern(
    					/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    				), Validators.required])],
      		message: ['', Validators.compose([Validators.pattern(/^[a-zA-Z]+[a-zA-Z '".-]*$/), Validators.required])],
  	    });
	}
	submit(){
		console.log('form', this.sendComment.value);
	}
}
