import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectsSkillsPageComponent } from './components/projects-skills-page/projects-skills-page.component';
import { EducationPageComponent } from './components/education-page/education-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const components = [
  HomePageComponent,
  AboutPageComponent,
  ProjectsSkillsPageComponent,
  EducationPageComponent,
  ExperiencePageComponent,
  ContactPageComponent,
];

@NgModule({
  declarations: [components],
  imports: [SharedModule],
})
export class PagesModule {}
