import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamService } from '../team.service';
import { Team } from '../team';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})

export class TeamsComponent {

  teams: Team[] = []
  defaultImageSource: string = 'assets/DefaultLogo.jpg'; 

  constructor(private teamService: TeamService) {}
  
  ngOnInit(): void {
    this.getAllTeams()
  }

  getAllTeams(): void {
    this.teamService.getTeams()
        .subscribe((teams: Team[]): Team[] => this.teams = teams)
  }

  deleteTeam(team: Team): void {
    this.teamService.deleteTeam(team.id!)
          .subscribe({next: () =>  {this.getAllTeams()}});
  }

  setDefaultImage(team: Team): void {
    team.logo = this.defaultImageSource;
  }

};

