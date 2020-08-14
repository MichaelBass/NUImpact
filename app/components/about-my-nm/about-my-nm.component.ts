import { Component, OnInit } from '@angular/core';

import {RedcapService} from "../../services/redcap.service";
import {TimedSegment} from "../../timedsegment.model";

@Component({
  selector: 'app-about-my-nm',
  templateUrl: './about-my-nm.component.html',
  styleUrls: ['./about-my-nm.component.scss']
})
export class AboutMyNmComponent implements OnInit {
	card = [
    {
      src: 'assets/img/Barnard.jpg',
      title: 'Cynthia Barnard, PhD, MBA',
      icon:'icon-dashboard',
      link: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=16648',
      target:'To learn more about her work click here.',
      description: 'Dr. Barnard is an Assistant Professor of Medicine (General Internal Medicine and Geriatrics) at Northwestern University Feinberg School of Medicine.  She is also the vice president of quality at Northwestern Memorial HealthCare.'
    },
    {
      src: 'assets/img/Cella.jpg',
      title: 'David Cella, PhD',
      icon:'icon-symptom-library',
      link: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=14537',
      target:'To learn more about his work click here.',
      description: 'Dr. Cella is the Ralph Seal Paffenbarger Professor and Chair of the Department of Medical Social Sciences at Northwestern University Feinberg School of Medicine. As Chair of the department, he plays a leadership role in the development and orchestration of transdisciplinary scientific collaborations.'
    },
    {
      src: 'assets/img/Garcia.jpg',
      title: 'Sofia F. Garcia, PhD',
      icon:'icon-patient-resources',
      link: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=16269',
      target:'To learn more about her work click here.',
      description: 'Dr. Garcia is an Associate Professor of Medical Social Sciences and Psychiatry and Behavioral Sciences at Northwestern University Feinberg School of Medicine.'
    },
    {
      src: 'assets/img/Kircher.jpg',
      title: 'Sheetal M Kircher, MD',
      icon:'icon-my-favorites',
      link: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=28180',
      target:'To learn more about her work click here.',
      description: 'Dr. Kircher is an oncologist and Associate Professor of Medicine (Hematology and Oncology) at Northwestern University Feinberg School of Medicine.'
    },
    {
      src: 'assets/img/Penedo.jpg',
      title: 'Frank J. Penedo, PhD',
      icon: 'icon-contact-us',
      link: 'https://umiamihealth.org/sylvester-comprehensive-cancer-center/research/faculty/frank-j-penedo',
      target:'To learn more about his work click here.',
      description: 'Dr. Penedo is a Professor of Psychology and Medicine and the Associate Director for Cancer Survivorship and Translational Behavioral Sciences at the University of Miami.'
    },
    {
      src: 'assets/img/Scholtens.jpg',
      title: 'Denise M Scholtens, PhD',
      icon: 'icon-contact-us',
      link: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=16163',
      target:'To learn more about her work click here.',
      description: 'Dr. Scholtens is a Professor of Preventative Medicine (Biostatistics) and Neurological Surgery and Chief, Division of Biostatistics at Northwestern University Fienberg School of Medicine.'
    },
    {
      src: 'assets/img/Smith.jpg',
      title: 'Justin Dean Smith, PhD',
      icon: 'icon-contact-us',
      link: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=33205',
      target:'To learn more about his work click here.',
      description: 'Dr. Smith is an Associate Professor of Psychiatry and Behavioral Sciences, Medical Social Sciences, and Preventative Medicine at Northwestern University Feinberg School of Medicine.'
    },
    {
      src: 'assets/img/Yanez.jpg',
      title: 'Betina Yanez, PhD',
      icon: 'icon-contact-us',
      link: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=28675',
      target:'To learn more about her work click here.',
      description: 'Dr. Yanez is an Associate Professor in the Department of Medical Social Sciences at Northwestern University Feinberg School of Medicine. She is also the director of patient engagement for the Cancer Survivorship Institute for the Robert H. Lurie Comprehensive Cancer Center.'
    }
  ]

  constructor(private redcapService: RedcapService) { }


  logPDF(doc:string){
    let timedSegment = this.redcapService.getTimedSegment();
    this.redcapService.logWebsite(timedSegment, doc, "pdf").subscribe( res => {});
  }

  ngOnInit() {
  }

}
