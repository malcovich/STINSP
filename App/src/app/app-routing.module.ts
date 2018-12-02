import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LeaguesComponent } from './admin/leagues/leagues.component';
import { CreateLeagueComponent } from './admin/leagues/create-league/create-league.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: LandingComponent }
  ]}, 
  { 
    path: 'dashboard', component: DashboardComponent 
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'leagues', component: LeaguesComponent},
      { path: 'leagues/add', component: CreateLeagueComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
