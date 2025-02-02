import { Component, OnInit } from '@angular/core';
import { LEVELS } from '../../../../utils/constants';
import { Skill } from '../../../../interfaces/skill.interface';
import { SkillService } from '../../../../services/Skill/skill.service';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'cv-skills',
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    standalone: false
})
export class SkillsComponent implements OnInit {
  public skills$?: Observable<Skill[]>;
  public isLoading$?: Observable<boolean>;
  public readonly LEVELS = LEVELS;

  constructor(private skillService: SkillService) {
    this.skills$ = this.skillService.skillsObservable.pipe(
      map((data) => {
        data.reverse();
        return data;
      })
    );
    this.isLoading$ = this.skillService.isLoadingObservable;
  }

  public ngOnInit(): void {
    this.skillService.fetchSkills();
  }
}
