import { Component, Input, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/IExperience';
import { ExperienceService } from 'src/app/services/pages/character/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {
  @Input() characterID:number;
  experience: IExperience = {
    characterID:0,
    available:0,
    spent:0,
  };

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {this.experienceService.getExperience(this.characterID).subscribe((experience) => this.experience = experience);}

  editExperience():void {
    if (this.experience?.characterID === 0) {
      this.experienceService.addExperiences(this.experience).subscribe();
    }

    this.experienceService.editExperiences(this.experience!).subscribe();
  }
}
