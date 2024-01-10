import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    MessagesComponent,
    DashboardComponent,
    TeamDetailComponent,
    TeamsFormComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // SimpleNotificationsModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }