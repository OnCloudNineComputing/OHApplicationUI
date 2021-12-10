import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'office-hours', component: OfficeHoursComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
