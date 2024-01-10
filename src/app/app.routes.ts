import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'team/:id' , component: TeamDetailComponent},
  { path: 'teams' , component: TeamsComponent},
  { path: 'create' , component: TeamsFormComponent},
  { path: 'edit/:id' , component: EditFormComponent},
  { path: '**' , component: NotFoundComponent},
  { path: '404' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }