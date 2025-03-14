import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'cv-projects-skills',
  templateUrl: './Projects-Skills.component.html',
  styleUrl: './Projects-Skills.component.scss',
  imports: [MatDivider, ProjectsComponent, SkillsComponent],
})
export class ProjectsSkillsComponent {}
