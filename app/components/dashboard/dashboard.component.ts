import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import {RedcapService} from "../../services/redcap.service";
import {HelperService} from "../../services/helper.service";
import {Card} from "../../card.model";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isWarn: boolean = true;
 
  card = [];
  title: string = "Based on the results from your recent health questionnaire, there are no symptoms to report. This may not be always be the case as symptoms may change; remember you can visit the symptom library and other sections in this website anytime you want.";

	constructor(private route: ActivatedRoute, private redcapService: RedcapService, private helperService: HelperService) { }

	ngOnInit() {
   // this.card = this.redcapService.getSymptom_Cards(0,6);

    this.route.queryParamMap.subscribe(
    ( params: ParamMap) => {

        if(params.keys.length == 2){

          var ts = new TimedSegment();

          if( params.get('UUID') == null ){
            ts.user = "undefined";
          }else{
            ts.user = params.get('UUID');
            this.helperService.setCookie("UUID", ts.user, 90);
          }

          let _data = "";
          if( params.get('DATA') != null ){
            _data = params.get('DATA');
            this.helperService.setCookie("DATA", _data, 90);
          }

          ts.topic = "Log-in";
          ts.quantity = 15;

          this.redcapService.initialTimedSegment(ts, _data).subscribe(
            (qs_param: any) => {
              this.redcapService.dashboard = qs_param;
              this.card = this.redcapService.getSymptom_CardsForQS();
              if(this.card.length >0){
                this.title = "Based on the results from your recent health questionnaire, you may want to view the sections below. These sections provide useful information about how you and your health care team can manage your symptoms.";
              }
            }
          );

        }else{

          if(this.redcapService.getTimedSegment().user == "undefined"){
            var ts = new TimedSegment();
            ts.user =  this.helperService.getCookie("UUID");
            ts.topic = "Log-in";
            ts.quantity = 15;
            this.redcapService.initialTimedSegment(ts, this.helperService.getCookie("DATA")).subscribe(
              (qs_param: any) => {
                this.redcapService.dashboard = qs_param;
                this.card = this.redcapService.getSymptom_CardsForQS();
                if(this.card.length >0){
                  this.title = "Based on the results from your recent health questionnaire, you may want to view the sections below. These sections provide useful information about how you and your health care team can manage your symptoms.";
                }                
              }
            );
          } else {
            this.card = this.redcapService.getSymptom_CardsForQS();
            if(this.card.length >0){
              this.title = "Based on the results from your recent health questionnaire, you may want to view the sections below. These sections provide useful information about how you and your health care team can manage your symptoms.";
            } 
          }
        }

      }
    );
    

	}
  dismiss(){
    this.isWarn = false;
  }

  displayAll(){
    this.card = this.redcapService.getSymptom_Cards(0,12);
  }
}
