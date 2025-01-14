import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../interfaces/project.interface';
import { BaseClientService } from '../base-client.service';
import { PATHS } from '../../utils/paths.enum';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseClientService {
  public projects$: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(
    []
  );

  public fetchProjects(): void {
    this.fetch(this.projects$, PATHS.PROJECTS);
  }

  public get projectsAsObservable(): Observable<Project[]> {
    return this.projects$.asObservable();
  }
}
