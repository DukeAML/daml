import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PapersComponent } from './components/papers/papers.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GpusComponent } from './components/gpus/gpus.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gpus', component: GpusComponent},
  {path: 'papers', component: PapersComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'courses', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
