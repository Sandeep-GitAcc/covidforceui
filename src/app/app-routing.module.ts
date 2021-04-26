import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodServiceComponent } from './food-service/food-service.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HospitalBedsComponent } from './hospital-beds/hospital-beds.component';
import { MedicalServiceComponent } from './medical-service/medical-service.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { OverviewComponent } from './overview/overview.component';
import { OxygenSupplyComponent } from './oxygen-supply/oxygen-supply.component';
import { PlasmaBankComponent } from './plasma-bank/plasma-bank.component';

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'medical', component: MedicalServiceComponent},
  {path: 'plasma', component: PlasmaBankComponent},
  {path: 'foodservice', component: FoodServiceComponent},
  {path: 'guidelines', component: GuidelinesComponent},
  {path: 'mentalhealth', component: MentalHealthComponent},
  {path: 'hospitalbeds', component: HospitalBedsComponent},
  {path: 'oxygensupply', component: OxygenSupplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
