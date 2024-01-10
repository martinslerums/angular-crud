import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { MessagesComponent } from './messages/messages.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    TeamsComponent,
    MessagesComponent,
    TeamDetailComponent,
    TeamsFormComponent,
    EditFormComponent,
    NotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent { 

  // constructor( public service: NotificationsService ) {}

  // onSuccess(message: string) {
  //   this.service.success('Success', message, {
  //     position: ['bottom', 'right'],
  //     timeOut: 2000,
  //     animate: 'fade',
  //     showProgressBar: true,
  //   })
  // }

  // onError(message: string) {
  //   this.service.error('Error', message, {
  //     position: ['bottom', 'right'],
  //     timeOut: 2000,
  //     animate: 'fade',
  //     showProgressBar: true,
  //   })
  // }

}
