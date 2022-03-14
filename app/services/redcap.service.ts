import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import { of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {TimedSegment} from "../timedsegment.model";
import {WebResource} from "../webresource.model";
import {Card} from "../card.model";
import {Card2} from "../card2.model";
import {Card3} from "../card3.model";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/html; charset=utf-8','Accept':'application/json','Access-Control-Allow-Origin':'*' }) 
  };

export const defaultTimedSegment: TimedSegment = JSON.parse("{\"user\":\"undefined\",\"topic\":\"Dashboard\",\"quantity\":15}");
export const limitTimedSegment: TimedSegment = JSON.parse("{\"user\":\"Done\",\"topic\":\"Done\",\"quantity\":1}");
export const THRESHOLD: number = 4;

export const TREATMENT_CARDS: Card3[] = [
    {
      src: 'assets/img/PalliativeCare_A.jpg',
      label: 'Palliative Care',
      icon:'icon-dashboard',
      text:'The goal of palliative care is to provide relief from pain and discomfort. This care can also provide physical, emotional, or spiritual care.',
      route:'patient-resources',
      route2:'treatment',
      route3:'palliative'
    },
    {
      src: 'assets/img/IntegrativeCare_A.jpg',
      label: 'Integrative Medicine',
      icon:'icon-dashboard',
      text:'This type of medicine incorporates integrative therapies to engage your mind, body, and spirit.',
      route:'patient-resources',
      route2:'treatment',
      route3:'integrative'
    },
    {
      src: 'assets/img/CancerRehabilitationServices_A.jpg',
      label: 'Cancer Rehabilitation Services',
      icon:'icon-dashboard',
      text:'Here you will find rehabilitation services that Northwestern Medicine provides to their patients.',
      route:'patient-resources',
      route2:'treatment',
      route3:'rehabilitation'
    },
    {
      src: 'assets/img/CancerSurvivorship_A.jpg',
      label: 'Cancer Survivorship Services',
      icon:'icon-dashboard',
      text:'The services described here can help survivors live a healthy and fulfilling life.',
      route:'patient-resources',
      route2:'treatment',
      route3:'survivorship'
    }
]
export const FINANCIAL_CARDS: Card3[] = [
    {
      src: 'assets/img/ManagingtheCostofTreatment_A.jpg',
      label: 'Managing the Cost of Treatment',
      icon:'icon-dashboard',
      text:'There are resources available to you to help you manage the cost of treatment, medication, co-pays, childcare, home care, etc.',
      route:'patient-resources',
      route2:'financial',
      route3:'cost'
    },
    {
      src: 'assets/img/ManagingLegalWorkplaceIssues_A.jpg',
      label: 'Legal and Workplace Issues',
      icon:'icon-dashboard',
      text:'Here you will find resources that can help you address any concerns you have about workplace, insurance, and other legal issues.',
      route:'patient-resources',
      route2:'financial',
      route3:'legal'
    },
    {
      src: 'assets/img/ManagingTransportationandOtherConcerns_A.jpg',
      label: 'Managing Transportation and Other Concerns',
      icon:'icon-dashboard',
      text:'There are services that help cover all or almost all the cost of transportation to and from your appointment, meals, and lodging.',
      route:'patient-resources',
      route2:'financial',
      route3:'transportation'
    },
    {
      src: 'assets/img/BodyImageConcerns_A.jpg',
      label: 'Managing Hair Loss and Body Image Concerns',
      icon:'icon-dashboard',
      text:'Here are resources that can help you with your look and feel after cancer.',
      route:'patient-resources',
      route2:'financial',
      route3:'bodyimage'
    }        
]
export const WELLBEING_CARDS: Card3[] = [
    {
      src: 'assets/img/TalkingwithYourHealthCareTeam_A.jpg',
      label: 'Talking with Your Health Care Team',
      icon:'icon-dashboard',
      text:'Here are some tips to ensure that your conversations with your care team are positive and productive.',
      route:'patient-resources',
      route2:'well-being',
      route3:'talking'
    }, 
    {
      src: 'assets/img/SocialSupport_A.jpg',
      label: 'Social Support',
      icon:'icon-dashboard',
      text:'Here are strategies on how to ask for help from your family and friends during and after cancer.',
      route:'patient-resources',
      route2:'well-being',
      route3:'social'
    },
    {
      src: 'assets/img/StressManagement_A.jpg',
      label: 'Stress Management',
      icon:'icon-dashboard',
      text:'Learning how to address your stress can help you manage the stressors that you may face every day.',
      route:'patient-resources',
      route2:'well-being',
      route3:'stress'
    },
    {
      src: 'assets/img/PhysicalActivity_A.jpg',
      label: 'Physical Activity',
      icon:'icon-dashboard',
      text:'Being active improves your overall well-being, but before you begin be sure to ask your doctor.',
      route:'patient-resources',
      route2:'well-being',
      route3:'physical'
    },
    {
      src: 'assets/img/ProblemSolving_A.jpg',
      label: 'Problem Solving',
      icon:'icon-dashboard',
      text:'Here are strategies you can use to problem solve when you are stressed or dealing with the stressors related to cancer.',
      route:'patient-resources',
      route2:'well-being',
      route3:'problem'
    },
    {
      src: 'assets/img/SmokingCessationandSubstanceUse_A.jpg',
      label: 'Smoking Cessation and Substance Abuse',
      icon:'icon-dashboard',
      text:'Smoking and substance use negatively affects your physical and mental health. Here you will find resources to quit.',
      route:'patient-resources',
      route2:'well-being',
      route3:'smokingcessation'
    },
    {
      src: 'assets/img/SunProtection_A.jpg',
      label: 'Sun Protection',
      icon:'icon-dashboard',
      text:'Everyone loves a little fun in the sun! Here are steps you can take to protect you from the harmful UV rays.',
      route:'patient-resources',
      route2:'well-being',
      route3:'sunprotection'
    },
    {
      src: 'assets/img/SupportiveOncologyandPalliativeCare_A.jpg',
      label: 'Supportive Oncology and Palliative Care',
      icon:'icon-dashboard',
      text:'Here you\'ll learn how a group of health care providers is ready to enhance and manage your treatment experience.',
      route:'patient-resources',
      route2:'well-being',
      route3:'supportive'
    }        
]

export const COMMUNITY_CARDS: Card3[] = [
    {
      src: 'assets/img/LocalSupportGroupsCommunities_A.jpg',
      label: 'Local Support Groups & Communities',
      icon:'icon-dashboard',
      text:'There are local support groups that are ready to help and listen to you.',
      route:'patient-resources',
      route2:'community',
      route3:'local'
    },   
    {
      src: 'assets/img/SupportOnlinebyPhone_A.jpg',
      label: 'Support Online and by Phone',
      icon:'icon-dashboard',
      text:'You\'re just a click and/or phone call away from getting the support you need.',
      route:'patient-resources',
      route2:'community',
      route3:'online'
    }, 
    {
      src: 'assets/img/SupportiveOncologyatNM_A.jpg',
      label: 'Supportive Oncology at Northwestern Medicines',
      icon:'icon-dashboard',
      text:'Here at Northwestern Medicine, there are services available to support your cancer journey.',
      route:'patient-resources',
      route2:'community',
      route3:'oncology'
    },
    {
      src: 'assets/img/OneonOneSupportfromCancerSurvivors_A.jpg',
      label: 'One on One Support from Cancer Survivors',
      icon:'icon-dashboard',
      text:'There are organizations that help pair individuals to share their cancer story with others who have the same diagnoses.',
      route:'patient-resources',
      route2:'community',
      route3:'survivors'
    }
  ]

export const DIET_CARDS: Card3[] = [
  
    {
      src: 'assets/img/HealthyFoods_A.jpg',
      label: 'Healthy Foods',
      icon:'icon-dashboard',
      text:'Knowing the type of foods to incorporate in your diet is an important first step to living a healthy life.',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'healthy-foods'
    }, 
    {
      src: 'assets/img/ManagingWeightGain_A.jpg',
      label: 'Managing Weight Gain',
      icon:'icon-dashboard',
      text:'Medications and chemotherapy can make cancer patients gain weight. Learning how to manage it is essential to staying healthy.',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'weight-gain'
    },    
    {
      src: 'assets/img/ManagingWeightLoss_A.jpg',
      label: 'Managing Weight Loss',
      icon:'icon-dashboard',
      text:'Ensuring your body has enough nutrients to support itself is important to overall health.',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'weight-loss'
    },
    {
      src: 'assets/img/DealingwithLossofAppetite_A.jpg',
      label: 'Dealing with a Loss of Appetite',
      icon:'icon-dashboard',
      text:'Eating when you’re not hungry can be a hard task. In this section, you will learn how to address this issue.',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'loss-of-appetite'
    },
    {
      src: 'assets/img/Nutrition Tips_A.jpg',
      label: 'Nutrition Tips',
      icon:'icon-dashboard',
      text:'Here are some additional nutrition tips you may want to try.',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'nutrition-tips'
    }
  ]
export const RESOURCE_CARDS: Card2[] = [
    {
      src: 'assets/img/enhancing.png',
      label: 'Enhancing Well-Being',
      icon:'icon-dashboard',
      text:'Click here to learn how to talk with your care team and other tips on how to maintain and/or improve your health.',
      route:'patient-resources',
      route2:'well-being'
    },
    {
      src: 'assets/img/community.png',
      label: 'Community Resources',
      icon:'icon-symptom-library',
      text:'Click here to learn about local support groups and one-on-one support.',
      route:'patient-resources',
      route2:'community'
    },
    {
      src: 'assets/img/Financial_A.jpg',
      label: 'Financial & Practical Matters',
      icon:'icon-patient-resources',
      text:'View this section to find resources on managing the cost of medications, treatments, travel to and from appointments, and learn how to manage legal and workplace issues.',
      route:'patient-resources',
      route2:'financial'
    },
    {
      src: 'assets/img/Diet_A.jpg',
      label: 'Diet & Nutrition',
      icon:'icon-my-favorites',
      text:'Click here to learn about strategies to manage weight gain, weight loss, loss of appetite, and more during and after cancer treatment.',
      route:'patient-resources',
      route2:'diet-nutrition'
    },
    {
      src: 'assets/img/treatment.png',
      label: 'Treatment Symptom Management',
      icon: 'icon-contact-us',
      text:'View this section to learn how Northwestern Medicine services can help you manage your symptoms so you can feel your best.',
      route:'patient-resources',
      route2:'treatment'
    }
  ]

export const SYMPTOM_CARDS: Card[] = [
      {
        src: 'assets/img/Pain_A.jpg',
        label: 'Pain',
        icon:'icon-dashboard',
        text:'Click here to learn about strategies you can try to reduce pain and learn how your care team can help.',
        route:'symptom-library-pain'
      },
      {
        src: 'assets/img/Fatigue_A.jpg',
        label: 'Fatigue',
        icon:'icon-symptom-library',
        text:'View this section to learn about strategies you can try to ease fatigue and learn how your care team can help.',
        route:'symptom-library-fatigue'
      },
      {
        src: 'assets/img/Sadness_A.jpg',
        label: 'Sadness',
        icon:'icon-patient-resources',
        text:'Click here to learn about strategies you can try to reduce sadness and learn how your care team can help.',
        route:'symptom-library-depression'
      },
      {
        src: 'assets/img/Anxiety_A.jpg',
        label: 'Anxiety',
        icon:'icon-my-favorites',
        text:'View this section to learn about strategies you can try to reduce anxiety and learn how your care team can help.',
        route:'symptom-library-anxiety'
      },
      {
        src: 'assets/img/Insomnia_A.jpg',
        label: 'Insomnia',
        icon: 'icon-contact-us',
        text:'View this section to learn about strategies you can try to ease insomnia and learn how your care team can help.',
        route:'symptom-library-insomnia'
      },
      {
        src: 'assets/img/PhysicalFunction_A.jpg',
        label: 'Physical Function',
        icon: 'icon-contact-us',
        text:'Click here to learn about strategies you can try to improve your physical function and learn how your care team can help.',
        route:'symptom-library-physicalfunction'
      },
      {
        src: 'assets/img/Nausea_A.jpg',
        label: 'Nausea & Vomiting',
        icon: 'icon-contact-us',
        text:'View this section to learn about strategies you can try to reduce nausea and vomiting and learn how your care team can help.',
        route:'symptom-library-nausea'
      },
      {
        src: 'assets/img/ShortnessofBreath_A.jpg',
        label: 'Shortness of Breath',
        icon: 'icon-contact-us',
        text:'Click here to learn more about shortness of breath and how your care team can help.',
        route:'symptom-library-breath'
      },
      {
        src: 'assets/img/Constipation_A.jpg',
        label: 'Constipation',
        icon: 'icon-contact-us',
        text:'View this section to learn about strategies you can try to ease constipation and learn how your care team can help.',
        route:'symptom-library-constipation'
      },
      {
        src: 'assets/img/Diarrhea_A.jpg',
        label: 'Diarrhea',
        icon: 'icon-contact-us',
        text: 'View this section to learn about strategies you can try to ease diarrhea and learn how your care team can help.',
        route:'symptom-library-diarrhea'
      },
      {
        src: 'assets/img/Sex_Life_A.jpg',
        label: 'Changes in Your Sex Life',
        icon: 'icon-contact-us',
        text:'Click here to learn how cancer can affect your sex life and how your care team can help.',
        route:'symptom-library-sexlife'
      },
      {
        src: 'assets/img/Neuropathy_A.jpg',
        label: 'Peripheral Neuropathy',
        icon: 'icon-contact-us',
        text:'View this section to learn about strategies you can try to ease peripheral neuropathy and learn how your care team can help.',
        route:'symptom-library-neuropathy'
      },
      {
        src: 'assets/img/Lymphedema_A.jpg',
        label: 'Lymphedema',
        icon: 'icon-contact-us',
        text: 'Click here to learn about strategies you can try to ease lymphedema and learn how your care team can help.',
        route:'symptom-library-lymphedema'
      },
      {
        src: 'assets/img/MouthSores_A.jpg',
        label: 'Mouth Sores',
        icon: 'icon-contact-us',
        text: 'Click here to learn more about mouth sores and how your care team can help.',
        route:'symptom-library-mouthsores'
      },
      {
        src: 'assets/img/Skin_A.jpg',
        label: 'Dry, Itchy, and Painful Skin',
        icon: 'icon-contact-us',
        text: 'View this section to learn about strategies you can try to ease dry, itchy, and painful skin and learn how your care team can help.',
        route:'symptom-library-skin'
      }      
    ]


@Injectable({
  providedIn: 'root'
})
export class RedcapService {

	timedSegment: TimedSegment;
  lastTimedSegment: TimedSegment;
  timelimit: number;

  dashboard: string[];

  favoriteCards: Card3[];

  constructor(private http: HttpClient) {
  	this.timedSegment = defaultTimedSegment;
    this.timelimit = 0;

    this.favoriteCards = [];

    var favorites = this.favoriteCards;
    TREATMENT_CARDS.forEach(function(item){
      favorites.push(item);
    });

    FINANCIAL_CARDS.forEach(function(item){
      favorites.push(item);
    });

    WELLBEING_CARDS.forEach(function(item){
      favorites.push(item);
    });

    COMMUNITY_CARDS.forEach(function(item){
      favorites.push(item);
    });

    DIET_CARDS.forEach(function(item){
      favorites.push(item);
    });

  }

  getCommunity_Cards(start:number, end:number): Card3[]{
    return COMMUNITY_CARDS.slice(start, end);
  } 
  getWellBeing_Cards(start:number, end:number): Card3[]{
    return WELLBEING_CARDS.slice(start, end);
  }
  getFinancial_Cards(start:number, end:number): Card3[]{
    return FINANCIAL_CARDS.slice(start, end);
  }

  getTreatment_Cards(start:number, end:number): Card3[]{
    return TREATMENT_CARDS.slice(start, end);
  }

  getDiet_Cards(start:number, end:number): Card3[]{
    return DIET_CARDS.slice(start, end);
  }

  getResource_Cards(start:number, end:number): Card2[]{
    return RESOURCE_CARDS.slice(start, end);
  }

  getSymptom_Cards(start:number, end:number): Card[]{
    return SYMPTOM_CARDS.slice(start, end);
  }

  getSymptom_CardsForQS(): Card[]{

    var _return = [];

    if(this.dashboard == undefined){
      //_return.push(SYMPTOM_CARDS[8]);
      return _return;
    }

    this.dashboard.forEach(element => {
       if(element == "Physical Function"){
       _return.push(SYMPTOM_CARDS[5]);
      }
      if(element == "Pain Interference"){
       _return.push(SYMPTOM_CARDS[0]);
      }       
      if(element == "Anxiety"){
       _return.push(SYMPTOM_CARDS[3]);
      }
      if(element == "Depression"){
       _return.push(SYMPTOM_CARDS[2]);
      }      
      if(element == "Fatigue"){
       _return.push(SYMPTOM_CARDS[1]);
      }
    });

    return _return;
  }
  getTimedSegment(): TimedSegment{

  	if(this.timedSegment == undefined){
		  this.timedSegment = defaultTimedSegment;
  	} 
    if(this.lastTimedSegment == undefined){
      this.lastTimedSegment = defaultTimedSegment;
    }

    if(this.lastTimedSegment.topic == this.timedSegment.topic){
      this.timelimit = this.timelimit + 1;
    }else{
      this.timelimit = 0;
    }

    return this.timedSegment;

  }

  getLastTimedSegment(): TimedSegment{
    return this.lastTimedSegment ;
  }

  saveComments(data:string):Observable<any> {
     return this.http.post<any>('https://symon.fsm.northwestern.edu/impactWS/Comments', JSON.parse(data) ).pipe(
        map(res => res),
        catchError(this.handleError)
      );    
  }

  initialTimedSegment(ts: TimedSegment, data:string):Observable<any>  {
    this.timedSegment = ts;
     return this.http.post<any>('https://symon.fsm.northwestern.edu/impactWS/Crypto', JSON.parse("{\"user\":\"" + ts.user + "\",\"language\":\"EN\",\"data\":\"" + data + "\"}") ).pipe(
        map(res => res),
        catchError(this.handleError)
      );    
  }

  setTimedSegment(ts: TimedSegment) {
    this.timelimit = 0;
    this.lastTimedSegment.topic = this.timedSegment.topic;
  	this.timedSegment = ts;
  }


  persistTimedSegment(ts: TimedSegment): Observable<TimedSegment> {

    if(this.timelimit > THRESHOLD){
      return of(limitTimedSegment);
    }

    if(ts.user == "undefined"){
      return of(limitTimedSegment);
    }
 
    return this.http.put<TimedSegment>('https://symon.fsm.northwestern.edu/impactWS/TimeSegment', ts)
      .pipe(
        map(res => new TimedSegment().deserialize(res)),
        catchError(this.handleError)
      );
         
  }

  logWebsite(ts: TimedSegment, site: string, type: string): Observable<WebResource>{

      var wr = new WebResource();
      wr.user = ts.user;
      wr.site = site;
      wr.type = type;
 
      if(ts.user == "undefined"){
        return of(wr);
      }

     return this.http.put<WebResource>('https://symon.fsm.northwestern.edu/impactWS/WebResource', wr).pipe(
        map(res => new WebResource().deserialize(res)),
        catchError(this.handleError)
      );
  }

  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // client-side error
       errorMessage = `Error: ${error.error.message}`;
     } else {
       // server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
   }

  saveFavorites(user: string, segment: string): Observable<any>{

    if(user == "undefined"){
      return of(Card3);
    }

    var data = JSON.parse( "{\"user\":\"" + user +   "\",\"segment\":\"" + segment + "\"}");
    return this.http.put<any>('https://symon.fsm.northwestern.edu/impactWS/Favorites', data);
  }

  deleteFavorites(user: string, segment: string): Observable<any>{
 
    if(user == "undefined"){
      return of(Card3);
    }

    var data = JSON.parse("{\"body\":{\"user\":\"" + user +   "\",\"segment\":\"" + segment + "\"}}");
    return this.http.delete<any>('https://symon.fsm.northwestern.edu/impactWS/Favorites', data);
  }

  getFavorites(user: string): Observable<any>{

    if(user == "undefined"){
       return of(Card3);
    }

      var data = JSON.parse( "{\"user\":\"" + user + "\"}" );
      return this.http.post<any>('https://symon.fsm.northwestern.edu/impactWS/Favorites', data)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

}
