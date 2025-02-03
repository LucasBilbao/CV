import { Component, input, Input } from '@angular/core';
import { Project } from '../../../../../interfaces/project.interface';
import { MatChip } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'cv-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
  imports: [MatChip, MatIcon],
})
export class ProjectItemComponent {
  public project = input.required<Project>();
}
