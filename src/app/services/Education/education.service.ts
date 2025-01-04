import { Injectable } from '@angular/core';
import { Education } from '../../interfaces/education.interface';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PATHS } from '../../utils/paths.enum';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educations: Subject<Education[]> = new Subject<Education[]>();

  constructor(private http: HttpClient) {}

  public fetchEducations() {
    this.http
      .get<Education[]>(PATHS.EDUCATIONS)
      .subscribe((data: Education[]) => (this.educationsObservable = data));
  }

  public set educationsObservable(value: Education[]) {
    this.educations.next(value);
  }

  public get educationsObservable(): Observable<Education[]> {
    return this.educations.asObservable();
  }
}
