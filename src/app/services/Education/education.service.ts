import { Injectable } from '@angular/core';
import { Education } from '../../interfaces/education.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PATHS } from '../../utils/paths.enum';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educations$: BehaviorSubject<Education[]> = new BehaviorSubject<
    Education[]
  >([]);
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  public fetchEducations() {
    this.isLoadingObservable = true;
    this.http
      .get<Education[]>(PATHS.EDUCATIONS)
      .subscribe((data: Education[]) => {
        this.educationsObservable = data;
        this.isLoadingObservable = false;
      });
  }

  public set educationsObservable(value: Education[]) {
    this.educations$.next(value);
  }

  public set isLoadingObservable(value: boolean) {
    this.isLoading$.next(value);
  }

  public get educationsObservable(): Observable<Education[]> {
    return this.educations$.asObservable();
  }

  public get isLoadingObservable(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
}
