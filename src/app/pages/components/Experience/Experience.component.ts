import { Component, OnInit, signal } from '@angular/core';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { Experience } from '../../../interfaces/experience.interface';
import { Observable, of } from 'rxjs';
import { ExperienceService } from '../../../services/Experience/experience.service';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-experience',
  templateUrl: './Experience.component.html',
  styleUrl: './Experience.component.scss',
  imports: [ExperienceItemComponent, LoaderComponent, CommonModule],
})
export class ExperienceComponent implements OnInit {
  public experiences$ = signal<Observable<Experience[]> | null>(null);
  public isLoading$ = signal<Observable<boolean>>(of(true));

  constructor(private experienceService: ExperienceService) {
    this.experiences$.set(this.experienceService.experiencesObservable);
    this.isLoading$.set(this.experienceService.isLoadingObservable);
  }

  public ngOnInit(): void {
    this.experienceService.fetchExperiences();
  }
}
