import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodServiceComponent } from './food-service/food-service.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HospitalBedsComponent } from './hospital-beds/hospital-beds.component';
import { MedicalServiceComponent } from './medical-service/medical-service.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { OverviewComponent } from './overview/overview.component';
import { PlasmaBankComponent } from './plasma-bank/plasma-bank.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OverviewComponent,
    FoodServiceComponent,
    PlasmaBankComponent,
    MentalHealthComponent,
    MedicalServiceComponent,
    GuidelinesComponent,
    HospitalBedsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
