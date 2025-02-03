import { Component, computed, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
  imports: [CommonModule],
})
export class SkillItemComponent {
  public skill = input.required<string>();
  public level = input<number>(0);
  public conicGradient = computed(() => {
    const deg = (this.level() + 1) * 72;
    return `conic-gradient(white 0 ${deg}deg, rgba(0, 0, 0, 0) ${deg}deg 0)`;
  });
}
