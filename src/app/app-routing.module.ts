import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PapersComponent } from './components/papers/papers.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GpusComponent } from './components/gpus/gpus.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { MembersResolver } from './components/member/members.resolver';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'gpus', component: GpusComponent},
  {path: 'papers', component: PapersComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'members', component: MemberComponent, resolve: {data: MembersResolver }},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
