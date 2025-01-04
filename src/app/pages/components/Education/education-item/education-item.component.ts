import { Component, Input } from '@angular/core';
import { Education } from '../../../../interfaces/education.interface';

@Component({
  selector: 'cv-education-item',
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.scss',
})
export class EducationItemComponent {
  @Input({ required: true }) public educationItem?: Education;
}
