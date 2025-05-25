import { Component, OnInit, signal } from '@angular/core';
import { LEVELS } from '../../../../utils/constants';
import { Skill } from '../../../../interfaces/skill.interface';
import { SkillService } from '../../../../services/Skill/skill.service';
import { map, Observable, of } from 'rxjs';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  imports: [
    SkillItemComponent,
    MatTooltipModule,
    CommonModule,
    LoaderComponent,
  ],
})
export class SkillsComponent implements OnInit {
  public skills$ = signal<Observable<Skill[]> | null>(null);
  public isLoading$ = signal<Observable<boolean>>(of(true));
  public readonly LEVELS = LEVELS;

  constructor(private skillService: SkillService) {
    this.skills$.set(this.skillService.skillsObservable);
    this.isLoading$.set(this.skillService.isLoadingObservable);
  }

  public ngOnInit(): void {
    this.skillService.fetchSkills();
  }
}
