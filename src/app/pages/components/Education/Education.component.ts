import { Component, OnInit, output, signal } from '@angular/core';
import { EducationService } from '../../../services/Education/education.service';
import { Observable, of } from 'rxjs';
import { Education } from '../../../interfaces/education.interface';
import { EducationItemComponent } from './education-item/education-item.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'cv-education',
  templateUrl: './Education.component.html',
  styleUrl: './Education.component.scss',
  imports: [CommonModule, EducationItemComponent, LoaderComponent],
})
export class EducationComponent implements OnInit {
  public educations$ = signal<Observable<Education[]> | null>(null);
  public isLoading$ = signal<Observable<boolean>>(of(true));

  constructor(private educationService: EducationService) {
    this.educations$.set(this.educationService.educationsObservable);
    this.isLoading$.set(this.educationService.isLoadingObservable);
  }

  ngOnInit(): void {
    this.educationService.fetchEducations();
  }
}
