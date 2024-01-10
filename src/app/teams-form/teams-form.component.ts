import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-teams-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teams-form.component.html',
  styleUrl: './teams-form.component.css'
})
export class TeamsFormComponent {
  

  constructor(
    private teamService: TeamService,
    private router: Router
    ) {}

  addTeam({name, logo, points}: Team): void {

    name = name.trim();

    if( !name || !logo || !points ) { return }

    this.teamService.postTeam({ name, logo, points } as Team)
        .subscribe(() => this.router.navigate(['/teams']))
  }
  


}
