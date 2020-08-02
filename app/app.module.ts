import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeOverlayComponent } from './components/home-overlay/home-overlay.component';
import { FooterComponent } from './components/sub-components/footer/footer.component';
import { HeaderComponent } from './components/sub-components/header/header.component';
import { MaterialModule } from './material-module';
import { PatientResourcesComponent } from './components/patient-resources/patient-resources/patient-resources.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SymptomLibraryComponent } from './components/symptom-library/symptom-library.component';
import { AccountComponent } from './components/account/account.component';
import { AboutMyNmComponent } from './components/about-my-nm/about-my-nm.component';
import { SidebarComponent } from './components/sub-components/sidebar/sidebar.component';
import { SymptomLibraryTopicComponent } from './components/symptom-library-topic/symptom-library-topic.component';

import { HealthyEatingComponent } from './components/patient-resources/diet-nutrition/healthy-eating/healthy-eating.component';
import { HealthyFoodsComponent } from './components/patient-resources/diet-nutrition/healthy-foods/healthy-foods.component';
import { BalancedDietComponent } from './components/patient-resources/diet-nutrition/balanced-diet/balanced-diet.component';
import { WeightLossComponent } from './components/patient-resources/diet-nutrition/weight-loss/weight-loss.component';
import { WeightGainComponent } from './components/patient-resources/diet-nutrition/weight-gain/weight-gain.component';
import { LossAppetiteComponent } from './components/patient-resources/diet-nutrition/loss-appetite/loss-appetite.component';
import { NutritionTipsComponent } from './components/patient-resources/diet-nutrition/nutrition-tips/nutrition-tips.component';
import { DietNutritionComponent } from './components/patient-resources/diet-nutrition/diet-nutrition/diet-nutrition.component';

import { CommunityComponent } from './components/patient-resources/community/community/community.component';
import { CommunitiesComponent } from './components/patient-resources/community/groups-communities/communities.component';
import { OnlineComponent } from './components/patient-resources/community/online-phone/online.component';
import { OncologyComponent } from './components/patient-resources/community/support-oncology/oncology.component';
import { SurvivorsComponent } from './components/patient-resources/community/survivors/survivors.component';

import { WellBeingComponent } from './components/patient-resources/well-being/well-being/well-being.component';
import { TalkingComponent } from './components/patient-resources/well-being/talking/talking.component';
import { StressComponent } from './components/patient-resources/well-being/stress/stress.component';
import { SocialComponent } from './components/patient-resources/well-being/social/social.component';
import { ProblemComponent } from './components/patient-resources/well-being/problem/problem.component';
import { PhysicalComponent } from './components/patient-resources/well-being/physical/physical.component';
import { SmokingCessationComponent } from './components/patient-resources/well-being/smokingcessation/smokingcessation.component';
import { SunProtectionComponent } from './components/patient-resources/well-being/sunprotection/sunprotection.component';
import { SupportiveComponent } from './components/patient-resources/well-being/supportive/supportive.component';

import { FinancialComponent } from './components/patient-resources/financial/financial/financial.component';
import { CostComponent } from './components/patient-resources/financial/cost/cost.component';
import { LegalComponent } from './components/patient-resources/financial/legal/legal.component';
import { TransportationComponent } from './components/patient-resources/financial/transportation/transportation.component';
import { BodyImageComponent } from './components/patient-resources/financial/bodyimage/bodyimage.component';

import { TreatmentComponent } from './components/patient-resources/treatment/treatment/treatment.component';
import { IntegrativeComponent } from './components/patient-resources/treatment/integrative/integrative.component';
import { PalliativeComponent } from './components/patient-resources/treatment/palliative/palliative.component';
import { RehabilitationComponent } from './components/patient-resources/treatment/rehabilitation/rehabilitation.component';
import { SurvivorshipComponent } from './components/patient-resources/treatment/survivorship/survivorship.component';



import { HttpClientModule } from '@angular/common/http';
import { RedcapService } from './services/redcap.service';
import { EncrDecrService } from './services/encr-decr.service';

import { SymptomLibraryPainComponent } from './components/symptom-library-pain/symptom-library-pain.component';
import { SymptomLibraryFatigueComponent } from './components/symptom-library-fatigue/symptom-library-fatigue.component';
import { SymptomLibraryDepressionComponent } from './components/symptom-library-depression/symptom-library-depression.component';
import { SymptomLibraryAnxietyComponent } from './components/symptom-library-anxiety/symptom-library-anxiety.component';

import { SymptomLibraryInsomniaComponent } from './components/symptom-library-insomnia/symptom-library-insomnia.component';
import { SymptomLibraryPhysicalFunctionComponent } from './components/symptom-library-physicalfunction/symptom-library-physicalfunction.component';
import { SymptomLibraryNauseaComponent } from './components/symptom-library-nausea/symptom-library-nausea.component';
import { SymptomLibraryLymphedemaComponent } from './components/symptom-library-lymphedema/symptom-library-lymphedema.component';
import { SymptomLibraryBreathComponent } from './components/symptom-library-breath/symptom-library-breath.component';
import { SymptomLibraryConstipationComponent } from './components/symptom-library-constipation/symptom-library-constipation.component';
import { SymptomLibraryDiarrheaComponent } from './components/symptom-library-diarrhea/symptom-library-diarrhea.component';
import { SymptomLibrarySexLifeComponent } from './components/symptom-library-sexlife/symptom-library-sexlife.component';
import { SymptomLibraryNeuropathyComponent } from './components/symptom-library-neuropathy/symptom-library-neuropathy.component';
import { SymptomLibraryMouthSoresComponent } from './components/symptom-library-mouthsores/symptom-library-mouthsores.component';
import { SymptomLibrarySkinComponent } from './components/symptom-library-skin/symptom-library-skin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeOverlayComponent,
    PatientResourcesComponent,
    FavoritesComponent,
    ContactUsComponent,
    SymptomLibraryComponent,
    AccountComponent,
    AboutMyNmComponent,
    SymptomLibraryTopicComponent,
    SidebarComponent,
    HealthyEatingComponent,
    HealthyFoodsComponent,
    BalancedDietComponent,
    WeightLossComponent,
    WeightGainComponent,
    LossAppetiteComponent,
    NutritionTipsComponent,
    DietNutritionComponent,
    CommunityComponent,
    CommunitiesComponent,
    OnlineComponent,
    OncologyComponent,
    SurvivorsComponent,
    WellBeingComponent,
    PhysicalComponent,
    ProblemComponent,
    SocialComponent,
    StressComponent,
    TalkingComponent,
    SmokingCessationComponent,
    SunProtectionComponent,
    SupportiveComponent,
    FinancialComponent,
    CostComponent,
    LegalComponent,
    TransportationComponent,
    BodyImageComponent,
    TreatmentComponent,
    IntegrativeComponent,
    PalliativeComponent,
    RehabilitationComponent,
    SurvivorshipComponent,
    SymptomLibraryPainComponent,
    SymptomLibraryFatigueComponent,
    SymptomLibraryDepressionComponent,
    SymptomLibraryAnxietyComponent,
    SymptomLibraryInsomniaComponent,
    SymptomLibraryPhysicalFunctionComponent,
    SymptomLibraryNauseaComponent,
    SymptomLibraryLymphedemaComponent,
    SymptomLibraryBreathComponent,
    SymptomLibraryConstipationComponent,
    SymptomLibraryDiarrheaComponent,
    SymptomLibrarySexLifeComponent,
    SymptomLibraryNeuropathyComponent,
    SymptomLibraryMouthSoresComponent,
    SymptomLibrarySkinComponent  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule.forRoot()
  ],
  providers: [RedcapService, EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
