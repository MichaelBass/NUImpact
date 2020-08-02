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
  title: string = "Based on your responses from your recent health questionnaire, your symptom results are in the normal range with nothing significant to report on your dashboard. This may not always be the case as your symptoms may change and your dashboard will be updated each time you complete a new health questionnaire. To view the results of your health questionnaire, log into MyChart.";
  no_symptom: string = "Based on your responses from your recent health questionnaire, your symptom results are in the normal range with nothing significant to report on your dashboard. This may not always be the case as your symptoms may change and your dashboard will be updated each time you complete a new health questionnaire. To view the results of your health questionnaire, log into MyChart.";
  symptom: string = "The symptoms below were selected for you based on the results of your recent health questionnaire. Click on a symptom category to learn about how you and your health care team may manage your symptom.  If you would like to view the results of your health questionnaire, log into MyChart.";

	constructor(private route: ActivatedRoute, private redcapService: RedcapService, private helperService: HelperService) { }

	ngOnInit() {

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
                this.title = this.symptom;
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
                  this.title = this.symptom;
                }                
              }
            );
          } else {
            this.card = this.redcapService.getSymptom_CardsForQS();
            if(this.card.length >0){
              this.title = this.symptom;
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
    this.card = this.redcapService.getSymptom_Cards(0,15);
  }
}
