import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PatientResourcesComponent } from './components/patient-resources/patient-resources/patient-resources.component';

import { CommunityComponent } from './components/patient-resources/community/community/community.component';
import { CommunitiesComponent } from './components/patient-resources/community/groups-communities/communities.component';
import { OnlineComponent } from './components/patient-resources/community/online-phone/online.component';
import { OncologyComponent } from './components/patient-resources/community/support-oncology/oncology.component';
import { SurvivorsComponent } from './components/patient-resources/community/survivors/survivors.component';

import { DietNutritionComponent } from './components/patient-resources/diet-nutrition/diet-nutrition/diet-nutrition.component';
import { HealthyEatingComponent } from './components/patient-resources/diet-nutrition/healthy-eating/healthy-eating.component';
import { HealthyFoodsComponent } from './components/patient-resources/diet-nutrition/healthy-foods/healthy-foods.component';
import { BalancedDietComponent } from './components/patient-resources/diet-nutrition/balanced-diet/balanced-diet.component';
import { NutritionTipsComponent } from './components/patient-resources/diet-nutrition/nutrition-tips/nutrition-tips.component';
import { WeightGainComponent } from './components/patient-resources/diet-nutrition/weight-gain/weight-gain.component';
import { WeightLossComponent } from './components/patient-resources/diet-nutrition/weight-loss/weight-loss.component';
import { LossAppetiteComponent } from './components/patient-resources/diet-nutrition/loss-appetite/loss-appetite.component';

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

import { FavoritesComponent } from './components/favorites/favorites.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SymptomLibraryComponent } from './components/symptom-library/symptom-library.component';
import { AccountComponent } from './components/account/account.component';
import { AboutMyNmComponent } from './components/about-my-nm/about-my-nm.component';
import { SymptomLibraryTopicComponent } from './components/symptom-library-topic/symptom-library-topic.component';

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

import { HomeOverlayComponent } from "./components/home-overlay/home-overlay.component";

const routes: Routes = [
	{ path: "", redirectTo: "dashboard", pathMatch: "full" },

	{ path: "dashboard", component: DashboardComponent },
	{ path: "symptom-library", component: SymptomLibraryComponent },
	{ path: "patient-resources", component: PatientResourcesComponent },
	{ path: "patient-resources/diet-nutrition", component: DietNutritionComponent },
	{ path: "patient-resources/diet-nutrition/healthy-eating", component: HealthyEatingComponent },
	{ path: "patient-resources/diet-nutrition/healthy-foods", component: HealthyFoodsComponent },
	{ path: "patient-resources/diet-nutrition/balanced-diet", component: BalancedDietComponent },
	{ path: "patient-resources/diet-nutrition/loss-of-appetite", component: LossAppetiteComponent },
	{ path: "patient-resources/diet-nutrition/weight-gain", component: WeightGainComponent },
	{ path: "patient-resources/diet-nutrition/weight-loss", component: WeightLossComponent },
	{ path: "patient-resources/diet-nutrition/nutrition-tips", component: NutritionTipsComponent },

	{ path: "patient-resources/community", component: CommunityComponent },
	{ path: "patient-resources/community/local", component: CommunitiesComponent },
	{ path: "patient-resources/community/online", component: OnlineComponent },
	{ path: "patient-resources/community/oncology", component: OncologyComponent },
	{ path: "patient-resources/community/survivors", component: SurvivorsComponent },

	{ path: "patient-resources/well-being", component: WellBeingComponent },
	{ path: "patient-resources/well-being/physical", component: PhysicalComponent },
	{ path: "patient-resources/well-being/problem", component: ProblemComponent },
	{ path: "patient-resources/well-being/social", component: SocialComponent },
	{ path: "patient-resources/well-being/stress", component: StressComponent },
	{ path: "patient-resources/well-being/talking", component: TalkingComponent },
	{ path: "patient-resources/well-being/smokingcessation", component: SmokingCessationComponent },
	{ path: "patient-resources/well-being/sunprotection", component: SunProtectionComponent },
	{ path: "patient-resources/well-being/supportive", component: SupportiveComponent },

	{ path: "patient-resources/financial", component: FinancialComponent },
	{ path: "patient-resources/financial/cost", component: CostComponent },
	{ path: "patient-resources/financial/legal", component: LegalComponent },
	{ path: "patient-resources/financial/transportation", component: TransportationComponent },
	{ path: "patient-resources/financial/bodyimage", component: BodyImageComponent },

	{ path: "patient-resources/treatment", component: TreatmentComponent },
	{ path: "patient-resources/treatment/integrative", component: IntegrativeComponent },
	{ path: "patient-resources/treatment/palliative", component: PalliativeComponent },
	{ path: "patient-resources/treatment/rehabilitation", component: RehabilitationComponent },
	{ path: "patient-resources/treatment/survivorship", component: SurvivorshipComponent },

	{ path: "my-favorites", component: FavoritesComponent },
	{ path: "contact-us", component: ContactUsComponent },
	{ path: "accounts", component: AccountComponent },
	{ path: "about", component: AboutMyNmComponent },
	{ path: "symptom-library-topic", component: SymptomLibraryTopicComponent },

	{ path: "symptom-library-pain", component: SymptomLibraryPainComponent },
	{ path: "symptom-library-fatigue", component: SymptomLibraryFatigueComponent },
	{ path: "symptom-library-depression", component: SymptomLibraryDepressionComponent },
	{ path: "symptom-library-anxiety", component: SymptomLibraryAnxietyComponent },
	{ path: "symptom-library-insomnia", component: SymptomLibraryInsomniaComponent },
	{ path: "symptom-library-physicalfunction", component: SymptomLibraryPhysicalFunctionComponent },
	{ path: "symptom-library-nausea", component: SymptomLibraryNauseaComponent },
	{ path: "symptom-library-lymphedema", component: SymptomLibraryLymphedemaComponent },
	{ path: "symptom-library-breath", component: SymptomLibraryBreathComponent },
	{ path: "symptom-library-constipation", component: SymptomLibraryConstipationComponent  },
	{ path: "symptom-library-diarrhea", component: SymptomLibraryDiarrheaComponent },
	{ path: "symptom-library-sexlife", component: SymptomLibrarySexLifeComponent },
	{ path: "symptom-library-neuropathy", component: SymptomLibraryNeuropathyComponent },
	{ path: "symptom-library-mouthsores", component: SymptomLibraryMouthSoresComponent },
	{ path: "symptom-library-skin", component: SymptomLibrarySkinComponent }		
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }

