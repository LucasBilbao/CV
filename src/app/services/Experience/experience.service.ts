import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience } from '../../interfaces/experience.interface';
import { BaseClientService } from '../base-client.service';
import { PATHS } from '../../utils/paths.enum';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends BaseClientService {
  private experiences$: BehaviorSubject<Experience[]> = new BehaviorSubject<
    Experience[]
  >([]);

  public fetchExperiences() {
    this.fetch<Experience>(this.experiences$, PATHS.EXPERIENCES);
  }

  public get experiencesObservable(): Observable<Experience[]> {
    return this.experiences$.asObservable();
  }
}
