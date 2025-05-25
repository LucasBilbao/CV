import { Injectable } from '@angular/core';
import { Education } from '../../interfaces/education.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { PATHS } from '../../utils/paths.enum';
import { BaseClientService } from '../base-client.service';
import { HttpClient } from '@angular/common/http';
import { ALIAS } from '../../utils/alias.enum';

@Injectable({
  providedIn: 'root',
})
export class EducationService extends BaseClientService {
  private educations$: BehaviorSubject<Education[]> = new BehaviorSubject<
    Education[]
  >([]);

  constructor(http: HttpClient) {
    super(http, ALIAS.EDUCATIONS);
  }

  public fetchEducations() {
    this.fetch<Education>(this.educations$, PATHS.EDUCATIONS);
  }

  public get educationsObservable(): Observable<Education[]> {
    return this.educations$.asObservable();
  }
}
