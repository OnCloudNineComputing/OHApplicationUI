import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService]},
  {path: 'office-hours', component: OfficeHoursComponent, canActivate: [AuthGuardService]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
