import { Component, input, Input } from '@angular/core';
import { MappedProject } from '../../../../../interfaces/project.interface';
import { MatChip } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { TruncatableComponent } from '../../../../../shared/components/truncatable/truncatable.component';
import { TruncatePipe } from '../../../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'cv-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
  imports: [MatChip, MatIcon, TruncatePipe],
})
export class ProjectItemComponent extends TruncatableComponent {
  public project = input.required<MappedProject>();
}
