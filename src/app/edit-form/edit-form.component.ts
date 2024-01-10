import { Component, Input } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Team } from '../team';
import { NgIf ,Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {

  @Input() team?: Team;

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

  saveEdit(): void {
    if (this.team) {
      this.teamService.putTeam(this.team).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back()
  }

}
