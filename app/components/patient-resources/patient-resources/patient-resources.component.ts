import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../../services/redcap.service";
import {Card2} from "../../../card2.model";

@Component({
  selector: 'app-patient-resources',
  templateUrl: './patient-resources.component.html',
  styleUrls: ['./patient-resources.component.scss']
})
export class PatientResourcesComponent implements OnInit {

  card1 = [];
  card2 = [];

  /*
	card1 = [
    {
      src: 'assets/img/enhancing.png',
      label: 'Enhancing Well-Being',
      icon:'icon-dashboard',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
    },
    {
      src: 'assets/img/community.png',
      label: 'Community Resources',
      icon:'icon-symptom-library',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
    },
    {
     src: 'assets/img/financial.png',
      label: 'Financial Resources',
      icon:'icon-patient-resources',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
    }
    ];
    card2 = [
    {
      src: 'assets/img/diet.png',
      label: 'Diet & Nutrition',
      icon:'icon-my-favorites',
      text:'Healthy eating is particularly important because it can improve your quality of life may help prevent the return of cancer. For people in treatment, the treatment side effects, changes in diet, and lack of physical activity are some of the reasons why many cancer patients experience unplanned weight loss or gain during treatment. In this section, you will learn how to address some concerns related to diet and nutrition and improve your quality of life through healthy eating.'
    },
    {
      src: 'assets/img/treatment.png',
      label: 'Treatment Symptom Management',
      icon: 'icon-contact-us',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
    }


  ];

  */
  constructor(private redcapService: RedcapService) { }

  ngOnInit() {
    this.card1 = this.redcapService.getResource_Cards(0,3);
    this.card2 = this.redcapService.getResource_Cards(3,6);
  }

}
