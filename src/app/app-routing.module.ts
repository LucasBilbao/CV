import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/components/Home/Home.component';
import { AboutComponent } from './pages/components/About/About.component';
import { ProjectsSkillsComponent } from './pages/components/Projects-Skills/Projects-Skills.component';
import { EducationComponent } from './pages/components/Education/Education.component';
import { ExperienceComponent } from './pages/components/Experience/Experience.component';
import { ContactComponent } from './pages/components/Contact/Contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects-skills', component: ProjectsSkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
