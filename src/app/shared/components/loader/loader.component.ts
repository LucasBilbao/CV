import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'cv-loader',
  template: `
    <div>
      <mat-spinner class="spinner"></mat-spinner>
    </div>
  `,
  styleUrl: './loader.component.scss',
  imports: [MatProgressSpinnerModule],
})
export class LoaderComponent {}
