import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../../services/Education/education.service';
import { Observable } from 'rxjs';
import { Education } from '../../../interfaces/education.interface';

@Component({
  selector: 'cv-education',
  templateUrl: './Education.component.html',
  styleUrl: './Education.component.scss',
})
export class EducationComponent implements OnInit {
  public educations$?: Observable<Education[]>;

  constructor(private educationService: EducationService) {
    this.educations$ = this.educationService.educationsObservable;
  }

  ngOnInit(): void {
    this.educationService.fetchEducations();
  }
}
