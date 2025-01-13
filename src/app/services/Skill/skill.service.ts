import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Skill } from '../../interfaces/Skill.interface';
import { UrlBuilder } from '../../utils/urlBuilder';
import { PATHS } from '../../utils/paths.enum';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private skills$: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>([]);
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  public fetchSkills(): void {
    this.isLoadingObservable = true;
    const url = new UrlBuilder()
      .setPath(PATHS.SKILLS)
      .setParameters({ _sort: 'level' })
      .get();
    this.http.get<Skill[]>(url).subscribe((skills) => {
      skills.reverse();
      this.skillsObservable = skills;
      this.isLoadingObservable = false;
    });
  }

  public set skillsObservable(value: Skill[]) {
    this.skills$.next(value);
  }

  public set isLoadingObservable(value: boolean) {
    this.isLoading$.next(value);
  }

  public get skillsObservable(): Observable<Skill[]> {
    return this.skills$.asObservable();
  }

  public get isLoadingObservable(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
}
