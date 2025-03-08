import { Component, input } from '@angular/core';
import { Experience } from '../../../../interfaces/experience.interface';
import { CommonModule } from '@angular/common';
import { DatingPipe } from '../../../../shared/pipes/dating.pipe';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';
import { TruncatableComponent } from '../../../../shared/components/truncatable/truncatable.component';

@Component({
  selector: 'cv-experience-item',
  imports: [CommonModule, DatingPipe, TruncatePipe],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent extends TruncatableComponent {
  public experience = input.required<Experience>();
}
