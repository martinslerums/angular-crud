import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location, NgIf } from '@angular/common';


import { Team } from '../team';
import { TeamService } from '../team.service';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [ NgIf, RouterLink, EditFormComponent],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css'
})
export class TeamDetailComponent {
  team: Team | undefined;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeam(id).subscribe((result: Team): Team => this.team = result);
  }

  goBack(): void {
    this.location.back()
  }

}
