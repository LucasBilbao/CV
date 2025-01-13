import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
})
export class SkillItemComponent {
  @Input() public skill?: string;
  @Input() public level: number = 0;

  public getConicGradient() {
    const deg = (this.level + 1) * 72;
    return `conic-gradient(white 0 ${deg}deg, rgba(0, 0, 0, 0) ${deg}deg 0)`;
  }
}
