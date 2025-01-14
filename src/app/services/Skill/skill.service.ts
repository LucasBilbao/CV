import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PATHS } from '../../utils/paths.enum';
import { BaseClientService } from '../base-client.service';
import { Skill } from '../../interfaces/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends BaseClientService {
  private skills$: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>([]);

  public fetchSkills(): void {
    this.fetch<Skill>(this.skills$, PATHS.SKILLS, { _sort: 'level' });
  }

  public get skillsObservable(): Observable<Skill[]> {
    return this.skills$.asObservable();
  }
}
