import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { calcDateDiffInDaysUntilNow } from '../../../../../utils/calcDateDiffInDaysUntilNow';

@Component({
  selector: 'cv-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
  imports: [CommonModule, MatBadgeModule],
})
export class SkillItemComponent {
  public skill = input.required<string>();
  public level = input<number>(0);
  public createdAt = input<number | string | undefined>(undefined);

  public conicGradient = computed(() => {
    const deg = (this.level() + 1) * 72;
    return `conic-gradient(white 0 ${deg}deg, rgba(0, 0, 0, 0) ${deg}deg 0)`;
  });

  public isNew = computed(() => {
    const date = this.createdAt();
    if (!date) {
      return false;
    }
    return calcDateDiffInDaysUntilNow(date) <= 30;
  });
}
