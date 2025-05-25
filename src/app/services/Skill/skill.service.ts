import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PATHS } from '../../utils/paths.enum';
import { BaseClientService } from '../base-client.service';
import { Skill } from '../../interfaces/skill.interface';
import { HttpClient } from '@angular/common/http';
import { ALIAS } from '../../utils/alias.enum';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends BaseClientService {
  private skills$: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>([]);

  constructor(http: HttpClient) {
    super(http, ALIAS.SKILLS);
  }

  public fetchSkills(): void {
    this.fetch<Skill>(this.skills$, PATHS.SKILLS);
  }

  public get skillsObservable(): Observable<Skill[]> {
    return this.skills$.asObservable();
  }
}
