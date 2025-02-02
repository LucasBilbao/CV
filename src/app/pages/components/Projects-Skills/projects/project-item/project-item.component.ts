import { Component, Input } from '@angular/core';
import { Project } from '../../../../../interfaces/project.interface';

@Component({
    selector: 'cv-project-item',
    templateUrl: './project-item.component.html',
    styleUrl: './project-item.component.scss',
    standalone: false
})
export class ProjectItemComponent {
  @Input({ required: true }) public project?: Project;
}
