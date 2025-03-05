import { Component, input, OnInit, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../../../../interfaces/experience.interface';
import { ExperienceService } from '../../../../services/Experience/experience.service';
import { CommonModule } from '@angular/common';
import { DatingPipe } from '../../../../shared/pipes/dating.pipe';

@Component({
  selector: 'cv-experience-item',
  imports: [CommonModule, DatingPipe],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  public experience = input.required<Experience>();
}
