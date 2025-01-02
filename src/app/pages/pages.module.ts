import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './components/Home/Home.component';
import { AboutComponent } from './components/About/About.component';
import { ProjectsSkillsComponent } from './components/Projects-Skills/Projects-Skills.component';
import { EducationComponent } from './components/Education/Education.component';
import { ExperienceComponent } from './components/Experience/Experience.component';
import { ContactComponent } from './components/Contact/Contact.component';
import { EducationItemComponent } from './components/Education/education-item/education-item.component';

const components = [
  HomeComponent,
  AboutComponent,
  ProjectsSkillsComponent,
  EducationComponent,
  ExperienceComponent,
  ContactComponent,
  EducationItemComponent,
];

@NgModule({
  declarations: [components],
  imports: [SharedModule],
})
export class PagesModule {}
