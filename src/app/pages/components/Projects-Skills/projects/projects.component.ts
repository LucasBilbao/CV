import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../interfaces/project.interface';
import { Observable } from 'rxjs';
import { ProjectService } from '../../../../services/Project/project.service';

@Component({
  selector: 'cv-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  public projects$?: Observable<Project[]>;
  public isLoading$?: Observable<boolean>;

  constructor(private projectService: ProjectService) {
    this.projects$ = this.projectService.projectsAsObservable;
    this.isLoading$ = this.projectService.isLoadingObservable;
  }

  public ngOnInit(): void {
    this.projectService.fetchProjects();
  }
}
