import { Component, input, Input } from '@angular/core';
import { Education } from '../../../../interfaces/education.interface';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { DatingPipe } from '../../../../shared/pipes/dating.pipe';

@Component({
  selector: 'cv-education-item',
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.scss',
  imports: [CommonModule, MatIcon, DatingPipe],
})
export class EducationItemComponent {
  public educationItem = input.required<Education>();
}
