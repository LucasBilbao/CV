import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnmappedProject } from '../../interfaces/project.interface';
import { BaseClientService } from '../base-client.service';
import { PATHS } from '../../utils/paths.enum';
import { HttpClient } from '@angular/common/http';
import { ALIAS } from '../../utils/alias.enum';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseClientService {
  public projects$: BehaviorSubject<UnmappedProject[]> = new BehaviorSubject<
    UnmappedProject[]
  >([]);

  constructor(http: HttpClient) {
    super(http, ALIAS.PROJECTS);
  }

  public fetchProjects(): void {
    this.fetch(this.projects$, PATHS.PROJECTS);
  }

  public get projectsAsObservable(): Observable<UnmappedProject[]> {
    return this.projects$.asObservable();
  }
}
