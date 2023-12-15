import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/components/home-page/home-page.component';
import { AboutPageComponent } from './pages/components/about-page/about-page.component';
import { ProjectsSkillsPageComponent } from './pages/components/projects-skills-page/projects-skills-page.component';
import { EducationPageComponent } from './pages/components/education-page/education-page.component';
import { ExperiencePageComponent } from './pages/components/experience-page/experience-page.component';
import { ContactPageComponent } from './pages/components/contact-page/contact-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects-skills', component: ProjectsSkillsPageComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
