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
      text:'Palliative care aims to provide relief from pain and discomfort—whether physical, emotional, or spiritual. The goal of palliative care is to enhance your quality of life as you manage cancer. Palliative care teams include physicians, nurse practitioners, nurses, and social workers.',
      route:'patient-resources',
      route2:'treatment',
      route3:'palliative'
    },
    {
      src: 'assets/img/IntegrativeCare_A.jpg',
      label: 'Integrative Medicine',
      icon:'icon-dashboard',
      text:'Integrative medicine combines complementary therapies, such as acupuncture and massage, with standard cancer therapies to help manage cancer-related side effects and improve well-being.',
      route:'patient-resources',
      route2:'treatment',
      route3:'integrative'
    },
    {
      src: 'assets/img/CancerRehabilitationServices_A.jpg',
      label: 'Cancer Rehabilitation Services',
      icon:'icon-dashboard',
      text:'Cancer rehabilitation services can be beneficial before, during, and after cancer treatment. Cancer rehabilitation services can help you if you feel weak, have pain and fatigue, lymphedema, or have difficulty keeping up with your activities of daily living, recreational activities, and work.',
      route:'patient-resources',
      route2:'treatment',
      route3:'rehabilitation'
    },
    {
      src: 'assets/img/CancerSurvivorship_A.jpg',
      label: 'Cancer Survivorship Services',
      icon:'icon-dashboard',
      text:'Cancer survivorship services can help you manage the long-term effects of cancer and cancer-related treatments.',
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
      text:'The cost of cancer care may be a concern if you or family member has been diagnosed with cancer. Resources are available to assist you with managing the cost of care, including medications.',
      route:'patient-resources',
      route2:'financial',
      route3:'cost'
    },
    {
      src: 'assets/img/ManagingLegalWorkplaceIssues_A.jpg',
      label: 'Legal and Workplace Issues',
      icon:'icon-dashboard',
      text:'People living with cancer often have questions about maintaining employment during treatment, accessing insurance and government benefits, and other legal topics. Help is available at no cost.',
      route:'patient-resources',
      route2:'financial',
      route3:'legal'
    },
    {
      src: 'assets/img/ManagingTransportationandOtherConcerns_A.jpg',
      label: 'Managing Transportation and Other Concerns',
      icon:'icon-dashboard',
      text:'Cancer treatment is time-consuming, requires frequent trips to the treatment center. Help is available.',
      route:'patient-resources',
      route2:'financial',
      route3:'transportation'
    }    
]
export const WELLBEING_CARDS: Card3[] = [
    {
      src: 'assets/img/TalkingwithYourHealthCareTeam_A.jpg',
      label: 'Talking with Your Health Care Team',
      icon:'icon-dashboard',
      text:'You can help your care team deliver the best care possible by telling them about your needs and discussing any questions or concerns you may have. Here are a few simple ways to improve communication with your health care team.',
      route:'patient-resources',
      route2:'well-being',
      route3:'talking'
    }, 
    {
      src: 'assets/img/SocialSupport_A.jpg',
      label: 'Social Support',
      icon:'icon-dashboard',
      text:'Living with cancer can be stressful. It is not always easy to express your feelings and ask for support, but doing so can ease tension and enhance wellbeing. Here are suggestions to make it easier when you reach out for support.',
      route:'patient-resources',
      route2:'well-being',
      route3:'social'
    },
    {
      src: 'assets/img/StressManagement_A.jpg',
      label: 'Stress Management',
      icon:'icon-dashboard',
      text:'Stress is a normal part of everyday life. However, sometimes stress can feel overwhelming. Learning how to manage stress can improve your mood and overall sense of wellbeing.',
      route:'patient-resources',
      route2:'well-being',
      route3:'stress'
    },
    {
      src: 'assets/img/PhysicalActivity_A.jpg',
      label: 'Physical Activity',
      icon:'icon-dashboard',
      text:'Regular exercise can reduce the chances of some cancers coming back. During treatment, such as chemotherapy and radiation, some people may feel fatigue and exercise can help combat fatigue. Going for a walk can be the best form of exercise during treatment. Regular exercise can also help you focus on other things besides your cancer. Moderate exercise such as going for a 30-minute walk several times a week can help lower stress, improve your health, and mood.',
      route:'patient-resources',
      route2:'well-being',
      route3:'physical'
    },
    {
      src: 'assets/img/ProblemSolving_A.jpg',
      label: 'Problem Solving',
      icon:'icon-dashboard',
      text:'Being diagnosed with cancer brings new changes to your life. These changes can be overwhelming. This section will touch on how you can effectively address these challenges through problem solving.',
      route:'patient-resources',
      route2:'well-being',
      route3:'problem'
    }
]

export const COMMUNITY_CARDS: Card3[] = [
    {
      src: 'assets/img/LocalSupportGroupsCommunities_A.jpg',
      label: 'Local Support Groups & Communities',
      icon:'icon-dashboard',
      text:'Local cancer support groups and communities offer you opportunities to take part in fun and healing activities while connecting with people who understand.',
      route:'patient-resources',
      route2:'community',
      route3:'local'
    },   
    {
      src: 'assets/img/SupportOnlinebyPhone_A.jpg',
      label: 'Support Online and by Phone',
      icon:'icon-dashboard',
      text:'Organizations such as the American Cancer Society provide cancer information, helpful resources, and support services at no cost online and by phone. Some organizations serve people living with any type of cancer, while others offer resources for people with specific types of cancer or unique needs.',
      route:'patient-resources',
      route2:'community',
      route3:'online'
    }, 
    {
      src: 'assets/img/SupportiveOncologyatNM_A.jpg',
      label: 'Supportive Oncology at Northwestern Medicines',
      icon:'icon-dashboard',
      text:'Supportive oncology services complement your cancer treatment plan by providing you with emotional and practical support throughout your entire cancer journey.',
      route:'patient-resources',
      route2:'community',
      route3:'oncology'
    },
    {
      src: 'assets/img/OneonOneSupportfromCancerSurvivors_A.jpg',
      label: 'One on One Support from Cancer Survivors',
      icon:'icon-dashboard',
      text:'Sometimes it just helps to talk with someone else who has had cancer. At such times, one-on-one support is available from a cancer survivor who has received treatment for the same type of cancer.',
      route:'patient-resources',
      route2:'community',
      route3:'survivors'
    }
  ]

/*
    {
      src: 'assets/img/fatigue.png',
      label: 'Importance of Healthy Eating',
      icon:'icon-dashboard',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'healthy-eating'
    },
      {
      src: 'assets/img/fatigue.png',
      label: 'Maintaining a Balanced Diet',
      icon:'icon-dashboard',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'balanced-diet'
    },

*/
export const DIET_CARDS: Card3[] = [
  
    {
      src: 'assets/img/HealthyFoods_A.jpg',
      label: 'Healthy Foods',
      icon:'icon-dashboard',
      text:'Here is a list of healthy foods that you should try to incorporate in your diet, but before making any changes to your diet talk to your doctor first.',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'healthy-foods'
    }, 
    {
      src: 'assets/img/ManagingWeightGain_A.jpg',
      label: 'Managing Weight Gain',
      icon:'icon-dashboard',
      text:'Due to certain cancer medications and chemotherapy, many cancer patients experience weight gain. Below are tips for dealing with weight gain.',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'weight-gain'
    },    
    {
      src: 'assets/img/ManagingWeightLoss_A.jpg',
      label: 'Managing Weight Loss',
      icon:'icon-dashboard',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'weight-loss'
    },
    {
      src: 'assets/img/DealingwithLossofAppetite_A.jpg',
      label: 'Dealing with a Loss of Appetite',
      icon:'icon-dashboard',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      route:'patient-resources',
      route2:'diet-nutrition',
      route3:'loss-of-appetite'
    },
    {
      src: 'assets/img/Nutrition Tips_A.jpg',
      label: 'Nutrition Tips',
      icon:'icon-dashboard',
      text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
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
      text:'Living with a cancer diagnosis can take a toll on your emotional, mental, and physical health. In Addition, your work and social support can change. This section will provide you with information, exercises, and tips on how to maintain and/or improve your wellbeing.',
      route:'patient-resources',
      route2:'well-being'
    },
    {
      src: 'assets/img/community.png',
      label: 'Community Resources',
      icon:'icon-symptom-library',
      text:'A cancer diagnosis is a major life event. Making treatment decisions, managing work and finances, and coping with difficult emotions can be stressful and, at times, overwhelming. Fortunately, there is help available at your treatment center, in your community or, if you prefer, online and over the phone.',
      route:'patient-resources',
      route2:'community'
    },
    {
      src: 'assets/img/Financial_A.jpg',
      label: 'Financial Resources',
      icon:'icon-patient-resources',
      text:'Managing finances and practical concerns such as insurance, transportation, and jobs can be a challenge for everyone, but can be especially challenging when you are facing cancer. Experts at your treatment center and at national non-profit organizations are available to help.',
      route:'patient-resources',
      route2:'financial'
    },
    {
      src: 'assets/img/Diet_A.jpg',
      label: 'Diet & Nutrition',
      icon:'icon-my-favorites',
      text:'Healthy eating is particularly important because it can improve your quality of life may help prevent the return of cancer. For people in treatment, the treatment side effects, changes in diet, and lack of physical activity are some of the reasons why many cancer patients experience unplanned weight loss or gain during treatment. In this section, you will learn how to address some concerns related to diet and nutrition and improve your quality of life through healthy eating.',
      route:'patient-resources',
      route2:'diet-nutrition'
    },
    {
      src: 'assets/img/treatment.png',
      label: 'Treatment Symptom Management',
      icon: 'icon-contact-us',
      text:'From the moment of diagnosis through survivorship, a wide range of traditional and complementary medical services are available to help you manage symptoms and feel your best.',
      route:'patient-resources',
      route2:'treatment'
    }
  ]

export const SYMPTOM_CARDS: Card[] = [
      {
        src: 'assets/img/pain.png',
        label: 'Pain',
        icon:'icon-dashboard',
        text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-pain'
      },
      {
        src: 'assets/img/Fatigue_A.jpg',
        label: 'Fatigue',
        icon:'icon-symptom-library',
        text:'Cancer or cancer treatment can cause fatigue. It is different than feeling tired after not getting enough sleep or rest.',
        route:'symptom-library-fatigue'
      },
      {
        src: 'assets/img/depression.png',
        label: 'Depression',
        icon:'icon-patient-resources',
        text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-depression'
      },
      {
        src: 'assets/img/anxiety.png',
        label: 'Anxiety',
        icon:'icon-my-favorites',
        text:'Anxiety is common among patients and families who are coping with cancer. However, it is important to manage anxiety if it becomes overwhelming or gets in the way of your ability to manage your day-to-day life. Sometimes anxiety can cause patients to miss check-ups with their doctors or delay treatment.',
        route:'symptom-library-anxiety'
      },
      {
        src: 'assets/img/Insomnia_A.jpg',
        label: 'Insomnia',
        icon: 'icon-contact-us',
        text:'Sleeping well is important for your body and mind. A good night of sleep can help you think clearly, lower your blood pressure, help your appetite, and strengthen your immune system.',
        route:'symptom-library-insomnia'
      },
      {
        src: 'assets/img/physical.png',
        label: 'Physical Function',
        icon: 'icon-contact-us',
        text:'Physical Function - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-physicalfunction'
      },
      {
        src: 'assets/img/Nausea_A.jpg',
        label: 'Nausea & Vommiting',
        icon: 'icon-contact-us',
        text:'Nausea - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-nausea'
      },
      {
        src: 'assets/img/shortness.png',
        label: 'Shortness of Breath',
        icon: 'icon-contact-us',
        text:'Shortness of Breath - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-breath'
      },
      {
        src: 'assets/img/Constipation_A.jpg',
        label: 'Constipation',
        icon: 'icon-contact-us',
        text:'Constipation - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-constipation'
      },
      {
        src: 'assets/img/diarrhea.png',
        label: 'Diarrhea',
        icon: 'icon-contact-us',
        text:'Diarrhea - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-diarrhea'
      }
    ]


/*
      {
        src: 'assets/img/vomiting.png',
        label: 'Vomiting',
        icon: 'icon-contact-us',
        text:'Vomiting - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        route:'symptom-library-vomiting'
      },
*/

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


  initialTimedSegment(ts: TimedSegment, data:string):Observable<any>  {
    this.timedSegment = ts;
     return this.http.post<any>('https://symon.fsm.northwestern.edu/impactWS/Crypto', JSON.parse("{\"user\":\"" + ts.user + "\",\"data\":\"" + data + "\"}") ).pipe(
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
