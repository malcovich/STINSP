import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LeaguesComponent } from './admin/leagues/leagues.component';
import { CreateLeagueComponent } from './admin/leagues/create-league/create-league.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminLeagueService } from './admin/services/league.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    AdminComponent,
    LeaguesComponent,
    CreateLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AdminLeagueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
