import { Component, OnInit, signal } from '@angular/core';
import { Project } from '../../../../interfaces/project.interface';
import { Observable, of } from 'rxjs';
import { ProjectService } from '../../../../services/Project/project.service';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item/project-item.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'cv-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [CommonModule, ProjectItemComponent, LoaderComponent],
})
export class ProjectsComponent implements OnInit {
  public projects$ = signal<Observable<Project[]> | null>(null);
  public isLoading$ = signal<Observable<boolean>>(of(true));

  constructor(private projectService: ProjectService) {
    this.projects$.set(this.projectService.projectsAsObservable);
    this.isLoading$.set(this.projectService.isLoadingObservable);
  }

  public ngOnInit(): void {
    this.projectService.fetchProjects();
  }
}
