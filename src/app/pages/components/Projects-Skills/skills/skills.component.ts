import { Component, OnInit } from '@angular/core';
import { LEVELS } from '../../../../utils/constants';
import { SkillService } from '../../../../services/Skill/skill.service';
import { Observable } from 'rxjs';
import { Skill } from '../../../../interfaces/Skill.interface';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  public skills$?: Observable<Skill[]>;
  public isLoading$?: Observable<boolean>;
  public readonly LEVELS = LEVELS;

  constructor(private skillService: SkillService) {
    this.skills$ = this.skillService.skillsObservable;
    this.isLoading$ = this.skillService.isLoadingObservable;
  }

  public ngOnInit(): void {
    this.skillService.fetchSkills();
  }
}
